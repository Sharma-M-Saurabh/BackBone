import { ContactsOutlined } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSoftwareType, updateSoftware } from "../../Services/SoftwareTypeServices";

const initialState = {
    softwareDetails : {
      id: null,
      name: null,
      discription: null,
      created_by: null,
      updated_by: null,
      created_on: null,
      updated_on: null,
    },

    softwareTypeList : [],

    isLoading: false,
  error: {
    message: '',
    code: '',
  },



};

export const fetchSoftwareTypeDetails = createAsyncThunk(
    "/Softwaretype/user_id",
    async (UserId) => {
      const response = await fetchSoftwareType(UserId);
      console.log('responseee', response);
      return response;
      
    }
  );

  export const editSoftware = createAsyncThunk(
    '/Softwaretype/edit_user_id',
    async ({ userId, parameters }, thunkAPI) => {
      try {
        const response = await updateSoftware(userId, parameters);
        const resData = response;
        console.log('value in reducers',resData)
        if (response.status == 200 && resData.data) {
          // thunkAPI.dispatch(
          //   openSnackbar({
          //     message: resData.message,
          //     type: 'success',
          //   })
          // );
          return resData;
        } else {
          // thunkAPI.dispatch(
          //   openSnackbar({
          //     message: resData.error.message,
          //     type: 'error',
          //   })
          // );
          return resData.error.message;
        }
      } catch (error) {
        // openSnackbar({
        //   message: error.message,
        //   type: 'error',
        // });
      }
    }
  );


  export const softwareTypeSlice = createSlice({
    name: 'softwaretype',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
  
        .addCase(fetchSoftwareTypeDetails.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchSoftwareTypeDetails.fulfilled, (state, action) => {
          const payload = action.payload.data;
          state.softwareTypeList = payload.Softwaretype;

          state.isLoading = false;
        })
        .addCase(fetchSoftwareTypeDetails.rejected, (state) => {
        state.isLoading = false;

          state.softwareTypeList = [];
        })

        .addCase(editSoftware.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(editSoftware.fulfilled, (state, action) => {
          // update existing record
          state.isLoading = false;
          const softwareDetails = action.payload;
  
          // const updatedsoft = {
          //   name: softwareDetails.name,
          //   discription: softwareDetails.discription,
          // };
  
          // const updatedValue = state.softwareTypeList.map((user, index) => {
          //   if (user.id === softwareDetails.id) {
          //     return { ...user, ...updatedsoft };
          //   } else {
          //     return user;
          //   }
          // });
  
          // state.softwareTypeList = updatedValue;
          // state.shouldShowRightPanel = false;
        })
        .addCase(editSoftware.rejected, (state) => {
          state.isLoading = false;
        });

        
    },
  });

export const getsoftwareList = (state) => state.softwaretype.softwareTypeList;

export default softwareTypeSlice.reducer;

