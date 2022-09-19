import { deleteSoftwareSubURL, getSoftwareSubURL, getSoftwareURL, updateSoftwareSubURL } from './APIConfig';
import axiosInstance  from './APIs';


export const addSoftwareSubType = (parameters) => {
    return axiosInstance.post(getSoftwareSubURL(), JSON.stringify(parameters));
  };


  export const fetchSoftwareSubType = async () => {
    return await axiosInstance.get(getSoftwareURL());
  };


 

  export const updateSoftwareSubType = (userId, parameters) => {
    console.log('userid',userId);
    console.log('parameters',parameters);
    return axiosInstance.put(
      updateSoftwareSubURL(userId),
      JSON.stringify(parameters)
      );
  }


  export const deleteSoftwareSubType = (userID) => {
    console.log('services',userID)
    return axiosInstance.delete(deleteSoftwareSubURL(userID));
  };
  
  