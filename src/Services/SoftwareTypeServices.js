import axiosInstance  from './APIs';
import {getSoftwareURL,deleteSoftwareURL,updateSoftwareURL} from './APIConfig';


export const addSoftwareType = (parameters) => {
    return axiosInstance.post(getSoftwareURL(), JSON.stringify(parameters));
  };


  export const fetchSoftwareType = () => {
    return axiosInstance.get(getSoftwareURL());
  };


 

  export const updateSoftware = (userId, parameters) => {
    console.log('userid',userId);
    console.log('parameters',parameters);
    return axiosInstance.put(
      updateSoftwareURL(userId),
      JSON.stringify(parameters)
      );
  }


  export const deleteSoftware = (userID) => {
    console.log('services',userID)
    return axiosInstance.delete(deleteSoftwareURL(userID));
  };
  
  