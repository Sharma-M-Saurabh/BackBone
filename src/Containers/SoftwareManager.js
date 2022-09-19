import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SoftwareList from '../Components/Software/SoftwareList';
import { editSoftware, fetchSoftwareTypeDetails, getsoftwareList } from '../Redux/Reducers/SoftwareReducers'
import { addSoftwareType, deleteSoftware, updateSoftware } from '../Services/SoftwareTypeServices';
import { SoftwareActions } from '../Utils/HelperText';
import Popup from '../../src/Common/Popup';
import AddSoftware from '../Components/Software/AddSoftware';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const SoftwareManager = () => {

  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const [softwareAction, setSoftwareAction] = useState(null);
  const [shouldShowSoftware,setShowSoftware] = useState(false);
  const [showAddSoftware,setShowAddSoftware] = useState(false);
  



  const softwareList = useSelector(getsoftwareList)
  console.log('softwareList', softwareList);
  const dispatch = useDispatch()
  // const shouldShowRightPanel = useSelector(
  //   (state) => state.user.shouldShowRightPanel
  // );


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
  



  const handleSoftwareAction = (user, action) => {
    console.log('xcxc',action)
    switch (action) {
      // break;
      case SoftwareActions.DELETE:
        handleCutomerDeletion(user.id);
        console.log(user);
        break;

        case SoftwareActions.ADD:
          if (shouldShowSoftware) {
            // setShowsoftwareDetails(false);
          }
          setShowAddSoftware(true);
          setSelectedSoftware(null);
          setSoftwareAction(SoftwareActions.ADD);
          // dispatch(showRightPanel(true));

        case SoftwareActions.EDIT:
          // if (shouldShowSoftwareDetails) {
          //   console.log('shouldShowUserDetails',shouldShowSoftwareDetails)
            setShowSoftware(false);
          // }
          // setShowAddSoftware(true);
          // setSelectedSoftware(user.id);
          console.log('user',user)
          handleUpdateSoftwareForm(user.id)
          // setSoftwareAction(SoftwareActions.EDIT);
          break;
     

      default:
        break;
    }
  };


  const handleFormSubmit = async (formValues) => {
    const parameters = {
        name: formValues.name,
        discription: formValues.discription,
        created_by: formValues.created_by,
        updated_by: formValues.updated_by,
        // is_active: formValues.is_active,
    };

    try {
        const response = await addSoftwareType(parameters);
        console.log('datatatatat',response.data)

    } catch (error) {
        console.log(error);

    }

};


const handleAddSoftware = () => {
  handleSoftwareAction(null, SoftwareActions.ADD);
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

    <Box
    sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'secondary.main',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          pt: 5,
          mb : 5,
        }}
      >
        <FormControl sx={{ mr: 10, width: 200, align: 'center' }}>
          <OutlinedInput
            sx={{
              paddingRight: 0,
            }}
            name='searchStore'
            size='small'
            variant='outlined'
            id='search-store'
            placeholder='Search'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label=''>
                  {/* <SearchIcon sx={{ opacity: '0.5' }} /> */}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            px: 3,
          }}
          onClick={handleAddSoftware}

          variant='contained'
          startIcon={<AddIcon />}
        >
          Add Software
        </Button>
      </Box>
        <SoftwareList
          getsoftwareList={softwareList}
          handleSoftwareAction={handleSoftwareAction}
          handleUpdateSoftwareForm={handleUpdateSoftwareForm}


        />
        </Box>
         <AddSoftware 
        open={shouldShowSoftware}
        handleFormSubmit={handleFormSubmit}
        />
      </Box>
     


  )
}

export default SoftwareManager
