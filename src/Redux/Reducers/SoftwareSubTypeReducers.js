import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSoftwareSubType } from "../../Services/SoftwareSubTypeServices";

const initialState = {
  // softwareSubDetails: {
  //   id: null,
  //   name: null,
  //   discription: null,
  //   created_by: null,
  //   updated_by: null,
  //   created_on: null,
  //   updated_on: null,
  // },
  // access_token: null,

  softwareSubTypeList: [],
  isLoading: false,
  // shouldShowRightPanel: false,



  error: {
    message: '',
    code: '',
  },



};

export const fetchSoftwareSubTypeDetails = createAsyncThunk(
  "/SoftwareSubType/user_id",
  async (UserId) => {
    const response = await fetchSoftwareSubType(UserId);
    console.log('responsee', response);
    console.log('responsee');
    return response;

  }
);



export const softwarSubTypeSlice = createSlice({
  name: 'softwaresubtype',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchSoftwareSubTypeDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSoftwareSubTypeDetails.fulfilled, (state, action) => {
        const payload = action.payload.data;
        state.softwareSubTypeList = payload.SoftwareSubType;

        state.isLoading = false;
      })
      .addCase(fetchSoftwareSubTypeDetails.rejected, (state) => {
        state.isLoading = false;

        state.softwareSubTypeList = [];
      })


  },
});

export const getsoftwaresubList = (state) => state.softwaresubtype.softwareSubTypeList;

export default softwarSubTypeSlice.reducer;

