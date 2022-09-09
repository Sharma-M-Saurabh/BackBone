import axiosInstance  from './APIs';
import { postSoftwareType , getSoftwareType} from './APIConfig';


export const addSoftwareType = (parameters) => {
    return axiosInstance.post(postSoftwareType(), JSON.stringify(parameters));
  };


  export const fetchSoftwareType = () => {
    return axiosInstance.get(getSoftwareType());
  };
  
  