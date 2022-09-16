import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { styled } from '@mui/material/styles';
import AddSoftwareForm from './AddSoftwareForm'

const openedMixin = (theme) => ({
  width: 370,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
});

const UserDetailsDrawer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: 370,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const AddSoftware = (props) => {
  const { user, open, roles, userAction } = props;
  return (
    <UserDetailsDrawer open={open}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          bgcolor: 'transparent',
          position: 'relative',
        }}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            width: 28,
            height: 28,
            padding: '0.4rem',
            left: '1rem',
            top: '1rem',
            bgcolor: 'secondary.main',
            borderRadius: '10rem',
            position: 'absolute',
            cursor: 'pointer',
          }}
          onClick={props.closeHandler}
        />
        <AddSoftwareForm
        //   handleAddUserForm={props.handleAddUserForm}
        //   handleUpdateUserForm={props.handleUpdateUserForm}
        //   roles={roles}
        //   userAction={userAction}
        //   user={user}
        />
      </Box>
    </UserDetailsDrawer>
  );
};
export default AddSoftware;
