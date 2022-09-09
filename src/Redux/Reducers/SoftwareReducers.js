import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSoftwareType } from "../../Services/SoftwareTypeServices";

const initialState = {
    softwareTypeList : [],

    isLoading: false,
  error: {
    message: '',
    code: '',
  },



};

export const fetchSoftwareTypeDetails = createAsyncThunk(
    "/Softwaretype",
    async () => {
      const response = await fetchSoftwareType();
      console.log('responseee', response);
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
        });
    },
  });

export const getsoftwareList = (state) => state.softwaretype.softwareTypeList;

export default softwareTypeSlice.reducer;

