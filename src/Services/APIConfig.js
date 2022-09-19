const BaseURL = process.env.REACT_APP_OMS_BASE_URL;

console.log('baseurl', BaseURL);

export const getSignInURL = () => `${BaseURL}/api/token/`




//Crud Operation for SoftwareType

export const getSoftwareURL = () => `${BaseURL}/Softwaretype/`;
// export const postSoftwareType = () => `${BaseURL}/Softwaretype/`; ---same api for get and post
export const deleteSoftwareURL = (userId) => `${BaseURL}/Softwaretype/${userId}/`;
export const updateSoftwareURL = (userId) => `${BaseURL}/Softwaretype/${userId}/`;



//Crud Operation for Sub SoftwareType


export const getSoftwareSubURL = () => `${BaseURL}/Softwaretype/`;
// export const postSoftwareType = () => `${BaseURL}/SoftwreSubType/`; ---same api for get and post
export const deleteSoftwareSubURL = (userId) => `${BaseURL}/SoftwareSubType/${userId}/`;
export const updateSoftwareSubURL = (userId) => `${BaseURL}/SoftwareSubType/${userId}/`;



