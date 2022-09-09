const BaseURL = process.env.REACT_APP_OMS_BASE_URL;

console.log('baseurl', BaseURL);

export const getSignInURL = () => `${BaseURL}/api/token/`




//Crud Operation for SoftwareType

export const postSoftwareType = () => `${BaseURL}/Softwaretype/`;
export const getSoftwareType = () => `${BaseURL}/Softwaretype/`;
// export const deleteSoftwareType = (userId) => `${BaseURL}/Softwaretype/${userId}`;



