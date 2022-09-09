import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AddSoftwareList from '../Components/Software/AddSoftwareList';
import AddSoftwareType from '../Components/Software/AddSoftwareType'
import {fetchSoftwareTypeDetails,getsoftwareList} from '../Redux/Reducers/SoftwareReducers'
// import { deleteSoftwareType } from '../Services/APIConfig';
// import { addSoftwareType } from '../Services/SoftwareType';
import { UserActions } from '../Utils/HelperText';

const SoftwareManager = () => {

const [shouldShowSoftwareDetails,setShowSoftwareDetails] = useState(false);
const [selectedSoftware,setSelectedSoftware] = useState(null);


const softwareList = useSelector(getsoftwareList)
console.log('softwareList', softwareList);
const dispatch = useDispatch()


    // const handleAction = (user, action) => {
    //     switch (action) {
         
    //       case UserActions.ADD:
    //         if (shouldShowSoftwareDetails) {
    //           setShowSoftwareDetails(false);
    //         }
    //         // setShowAddCustomer(true);
    
    //         break;
    //       case UserActions.DELETE:
    //         handleUserDeletion(user);
    //         break;
    //       case UserActions.EDIT:
    //         setSelectedCustomer(user);
    //         break;
    
    //       default:
    //         break;
    //     }
    //   };

    //   const handleUserDeletion = async (user) => {
    //     setSelectedSoftware(user);
    //     try {
    //       const res = await deleteSoftwareType(user.id);
    //       if (res.status === 200) {
    //         dispatch(fetchUsers());
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };


    useEffect(()=>{

        dispatch(
          fetchSoftwareTypeDetails()
        )

    },[])
    


   


  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box
        sx={{
          height: '100vh',
        }}
      >
          <AddSoftwareList
          getsoftwareList={softwareList}
          />
      </Box>
    </Grid>
    
  )
}

export default SoftwareManager
