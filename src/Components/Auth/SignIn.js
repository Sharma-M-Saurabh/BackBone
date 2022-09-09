import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';




export default function SignIn(props) {
  console.log('props',props)
  const { submitDetails } = props;


  const ObjInitial = {
    Username: {
      value: '',
      error: false,
    },
    Password: {
      value: '',
      error: false,
    },
  };

  const [inputValues, setInputValue] = useState(ObjInitial)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (!isValidForm) {
      //  error
      submitDetails({
        username: inputValues.Username.value,
        password: inputValues.Password.value,
      });
    }

    // Call API
  };

  const validateForm = () => {
    let isError = false;
    const currrentValues = { ...inputValues };

    if (!inputValues.Username.value) {
      isError = true;
      currrentValues.Username.error = true;
    }
    if (!inputValues.Password.value) {
      isError = true;
      currrentValues.Password.error = true;
    }

    setInputValue({
      ...currrentValues,
    });
    return isError;
  };


  const handleOnChange = (event) => {
    const { name, value } = event.target;
    let currentValues = inputValues[name];
    console.log("event", currentValues);


    if (!value) {
      currentValues = {
        error: true,
        value: '',
      };
      setInputValue({ ...inputValues, [name]: currentValues });
    } 
    else if (name === 'username') {
      setInputValue({ ...inputValues, [name]:  { value: value, error: true }  });
    }
     else {
      currentValues.value = value;
      currentValues.error = false;
      setInputValue({ ...inputValues, [name]: currentValues });
    }
  };

  return (
    <Box component={"form"} noValidate autoComplete="off"  maxWidth="xs" encType="multipart/form-data">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin:  'auto',
          width : '40%'
        }}
        method="post"
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            autoComplete="Username"
            autoFocus
            onChange={handleOnChange}
            helperText={
              inputValues.Username.error ? 'Username is requird' : ''
            }
            error={inputValues.Username.error}
            value={inputValues.Username.value}
            
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

            onChange={handleOnChange}
            helperText={
              inputValues.Password.error ? 'Password is requird' : ''
            }
            error={inputValues.Password.error}
            value={inputValues.Password.value}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleOnSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </Box>
    </Box>
  );
}