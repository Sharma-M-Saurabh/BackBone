import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Box,
} from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddSoftwareType from '../Components/SoftwareTypes/AddSoftwareType'
import SoftwareTypeList from '../Components/SoftwareTypes/SoftwareTypeList'
import { SoftwareActions } from '../Utils/HelperText';
import { fetchSoftwareSubTypeDetails, getsoftwaresubList } from '../Redux/Reducers/SoftwareSubTypeReducers';

const SoftwareTypeManager = () => {

  const [shouldShowAddSoftware, setShowAddSoftware] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const [softwareAction, setSoftwareAction] = useState(SoftwareActions.ADD);



  // const allSoftwaressubtype = useSelector(getsoftwaresubList);
  // console.log('alldataofsoftware',allSoftwaressubtype);

  // const [softwareList , setSoftwareList] = useState(allSoftwaressubtype);


  // useEffect(()=>{
  //   setSoftwareList(allSoftwaressubtype)
  // },[allSoftwaressubtype]);

  // useEffect(()=>{
  //   fetchSoftwareSubTypeDetails();

  // },[])





    const handleAddSoftware = () => {
        handleSoftwareAction(null, SoftwareActions.ADD);
      };

      const handleSoftwareAction =  (software , action) => {
        switch (action){
            case SoftwareActions.ADD:
                setShowAddSoftware(true);
                setSelectedSoftware(null);
                setSoftwareAction(SoftwareActions.ADD)

            
        }

      }

      const closeRightSidePanel = (type) => {
        // if (type === 'userDetails') {
        //   setShowUserDetails(false);
        // } else {
          setShowAddSoftware(false);
        // }
        // dispatch(showRightPanel(false));
      };
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
                    <SearchIcon sx={{ opacity: '0.5' }} />
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
        <SoftwareTypeList
        // softwareList={softwareList} 
        />
      </Box>
        {/* <SoftwareTypeDetails
        /> */}
   

        <AddSoftwareType 
        open = {shouldShowAddSoftware}
        closeHandler={() => closeRightSidePanel('addSoftware')}

        softwareAction={softwareAction} />
    </Box>
  )
}

export default SoftwareTypeManager
