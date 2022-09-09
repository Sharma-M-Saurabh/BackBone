import React from 'react'
import SignIn from '../Components/Auth/SignIn'
import { login } from '../Services/AuthServices';
import { saveAccessToken } from '../Utils/HelperText';

const Signin = () => {


    const handleLogin = async (userDetails) => {
    console.log('userdetails', userDetails)

        try {
          const response = await login(userDetails);
            console.log('response', response)

    
          if (response.status === 200) {
            saveAccessToken(response.data.access);
        console.log('res', response.data.access)

           
           
          } else {
            console.log('error', response.error.message);
            
          }
        } catch (err) {
        //   const {
        //     response: {
        //     },
        //   } = err;
        console.log('err', err)
        }

      };


  return (
    <div>
        <SignIn submitDetails={handleLogin}/>
      
    </div>
  )
}

export default Signin
