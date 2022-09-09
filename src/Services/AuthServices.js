import { getSignInURL } from "./APIConfig";
import axiosInstance from './APIs';



export const login = (data) => {
    console.log('data', data)
    return axiosInstance.post(getSignInURL(), JSON.stringify(data));
  };