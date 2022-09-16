import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SoftwareList from '../Components/Software/SoftwareList';
import { editSoftware, fetchSoftwareTypeDetails, getsoftwareList } from '../Redux/Reducers/SoftwareReducers'
import { deleteSoftware, updateSoftware } from '../Services/SoftwareTypeServices';
import { UserActions } from '../Utils/HelperText';
import Popup from '../../src/Common/Popup';
import AddSoftware from '../Components/Software/AddSoftware';

const SoftwareManager = () => {

  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const [softwareAction, setSoftwareAction] = useState(null);
  const [shouldShowSoftware,setShowSoftware] = useState(false);
  const [showAddSoftware,setShowAddSoftware] = useState(false);
  



  const softwareList = useSelector(getsoftwareList)
  console.log('softwareList', softwareList);
  const dispatch = useDispatch()


  // const handleUpdateSoftwareForm = async (formValues) => {
  //   formValues.name = formValues.name;
  //   formValues.discription = formValues.discription;

  //   delete formValues.name;
  //   delete formValues.discription;

  //   const params = {
  //     userId: selectedSoftware.id,
  //     parameters: formValues,
  //   };
  //   dispatch(updateSoftware(params));
  // };

  const handleUpdateSoftwareForm = async (user) => {
    console.log(user)
    setSelectedSoftware(user.id);
    
    console.log(user)

    try {
      const res = await updateSoftware(user);
      console.log('sssssssssssssssssd', res);
      if (res.status === 200) {
        dispatch(fetchSoftwareTypeDetails());
      }
    } catch (error) {
      console.log(error);
    }
  };
  



  const handleAction = (user, action) => {
    console.log('xcxc',action)
    switch (action) {
      // break;
      case UserActions.DELETE:
        handleCutomerDeletion(user.id);
        console.log(user);
        break;

        case UserActions.EDIT:
          // if (shouldShowSoftwareDetails) {
          //   console.log('shouldShowUserDetails',shouldShowSoftwareDetails)
            setShowSoftware(false);
          // }
          // setShowAddSoftware(true);
          // setSelectedSoftware(user.id);
          console.log('user',user)
          handleUpdateSoftwareForm(user.id)
          // setSoftwareAction(UserActions.EDIT);
          break;
     

      default:
        break;
    }
  };

      
      


 

 



  const handleCutomerDeletion = async (user) => {
    console.log(user)
    setSelectedSoftware(user);
    
    console.log(user)

    try {
      const res = await deleteSoftware(user);
      console.log('sssssssssssssssssd', res);
      if (res.status === 200) {
        dispatch(fetchSoftwareTypeDetails());
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    dispatch(
      fetchSoftwareTypeDetails()
    )

  }, [])






  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box
        sx={{
          height: '100vh',
        }}
      >
        <SoftwareList
          getsoftwareList={softwareList}
          handleUserAction={handleAction}
          handleUpdateSoftwareForm={handleUpdateSoftwareForm}


        />
        <AddSoftware 
        open={shouldShowSoftware}
        />
      </Box>
     
        <Popup />

      
    </Grid>

  )
}

export default SoftwareManager
