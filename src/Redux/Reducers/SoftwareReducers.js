import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSoftwareType } from "../../Services/SoftwareTypeServices";

const initialState = {
  softwareDetails: {
    id: null,
    name: null,
    discription: null,
    created_by: null,
    updated_by: null,
    created_on: null,
    updated_on: null,
  },
  access_token: null,

  softwareTypeList: [],
  isLoading: false,
  shouldShowRightPanel: false,



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
    console.log('responsee');

    return response;

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

    
       



  },
});

export const getsoftwareList = (state) => state.softwaretype.softwareTypeList;

export default softwareTypeSlice.reducer;

