import { Checkbox, Box, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, InputLabel, Paper, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addSoftwareType } from '../../Services/SoftwareTypeServices'
import { BootstrapButton, TextArea } from '../Styled/TextArea'
import { BootstrapInput } from '../Styled/TextField'




const AddSoftwareTypeForm = (props) => {
    // const { handleFormSubmit } = props;

    console.log('props', props);

    const defaultInputValues = {
        name: '',
        discription: '',
        created_by: '',
        updated_by: '',
        // is_active : '',
    };

    const [inputValues, setInputValue] = useState(defaultInputValues)

    // Form errors
    const [errors, setErrors] = useState({
        name: '',
        discription: '',
        created_by: '',
        updated_by: '',
        // is_active : '',
    });

    // useEffect(() => {
    //     if (userAction === UserActions.EDIT) {
    //       const newInputValues = {
    //         fullName: user.fullname ? user.fullname : '',
    //         emailAddress: user.email ? user.email : '',
    //         phoneNumber: user.phone_number ? user.phone_number : '',
    //         username: user.username ? user.username : '',
    //         password: user.password ? user.password : '',
    //       };
    //       setInputValue(newInputValues);
    //     } else {
    //       setInputValue(defaultInputValues);
    //     }
    //   }, [user, userAction]);




    const handleOnSubmit = () => {
        let validationErrors = {};
        Object.keys(inputValues).forEach((name) => {
            console.log('ssss', name)
            const error = validateForm(name, inputValues[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors({ ...errors, ...validationErrors });
            return;
        }

        // Submit form
        // Submit form
        // if (userAction == UserActions.ADD) {
        // handleFormSubmit(inputValues);
        //   } else {
        // props.handleUpdateUserForm(inputValues);
        //   }
    };
    // };

    // const handleFormSubmit = async (formValues) => {
    //     const parameters = {
    //         name: formValues.name,
    //         discription: formValues.discription,
    //         created_by: formValues.created_by,
    //         updated_by: formValues.updated_by,
    //         // is_active: formValues.is_active,
    //     };

    //     try {
    //         const response = await addSoftwareType(parameters);
    //         console.log('datatatatat',response.data)

    //     } catch (error) {
    //         console.log(error);

    //     }

    // };


    const validateForm = (name, value) => {
        switch (name) {
            case 'name':
                if (!value || value.trim() === '') {
                    return 'software name is required';
                } else {
                    return '';
                }

            case 'discription':
                if (!value || value.trim() === '') {
                    return 'discription is required';
                } else {
                    return '';
                }

            case 'created_by':
                if (!value || value.trim() === '') {
                    return 'fill created by user name';
                } else {
                    return '';
                }

            case 'updated_by':
                if (!value || value.trim() === '') {
                    return 'fill updated by user name';
                } else {
                    return '';
                }

            // case 'isactive':
            //     if (!value) {
            //         return 'Please accept terms and conditions';
            //     } else {
            //         return '';
            //     }

            default: {
                return '';
            }
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        // const value =
        //   event.target.name === 'is_active' ? event.target.checked('isactive') :('disactive');


        setErrors({ ...errors, [name]: validateForm(name, value) });
        setInputValue({ ...inputValues, [name]: value });
    };



    return (
        <Box
            sx={{
                width: '100%',
            }}
            component={Paper}
        >
            <Box
                component={'form'}
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 5,
                    px: 5,
                    bgcolor: 'transparent',
                }}
                noValidate
                autoComplete='on'
            >
                <Grid container sx={{ width: '60%', alignSelf: 'center' }} spacing={2}>
                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <Typography>
                            Add Software Type
                        </Typography>
                    </Grid>
                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <FormControl
                            sx={{
                                width: '100%',
                                '& .css-dogy4y-MuiFormHelperText-root.Mui-error': {
                                    marginLeft: 0,
                                },
                            }}
                            variant='standard'
                        >
                            <InputLabel shrink htmlFor='first-name'>
                                Name
                            </InputLabel>
                            <BootstrapInput
                                name='name'
                                fullWidth
                                placeholder='Software name'
                                id='software-name'
                                required
                                onChange={handleOnChange}
                                helperText={errors.name}
                                value={inputValues.name}
                                error={errors.name ? true : false}



                            />
                        </FormControl>
                    </Grid>


                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <FormControl
                            sx={{
                                width: '100%',
                                '& .css-dogy4y-MuiFormHelperText-root.Mui-error': {
                                    marginLeft: 0,
                                },
                            }}
                            variant='standard'
                        >
                            <InputLabel shrink htmlFor='discription'>
                                discription
                            </InputLabel>
                            <TextArea
                                id={"discription"}
                                maxRows={4}
                                type='Text'
                                aria-label="maximum height"
                                placeholder="discription"

                                name="discription"
                                value={inputValues.discription}
                                onChange={handleOnChange}
                                style={{
                                    width: "100%",
                                    height: 100,
                                    backgroundColor: "#200020",
                                    resize: "vertical",
                                    color: "#fff",
                                    border: errors.discription ? '1px solid red' : 'none',
                                }}
                            />
                            <FormHelperText error={errors.discription ? true : false}
                            >
                                {errors.discription}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <FormControl
                            sx={{
                                width: '100%',
                                '& .css-dogy4y-MuiFormHelperText-root.Mui-error': {
                                    marginLeft: 0,
                                },
                            }}
                            variant='standard'
                        >
                            <InputLabel shrink htmlFor='created-by'>
                                Created by
                            </InputLabel>
                            <BootstrapInput
                                name='created_by'
                                fullWidth
                                placeholder='Name'
                                id='name'
                                required

                                onChange={handleOnChange}
                                helperText={errors.created_by}
                                value={inputValues.created_by}
                                error={errors.created_by ? true : false}

                            />
                        </FormControl>
                    </Grid>
                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <FormControl
                            sx={{
                                width: '100%',
                                '& .css-dogy4y-MuiFormHelperText-root.Mui-error': {
                                    marginLeft: 0,
                                },
                            }}
                            variant='standard'
                        >
                            <InputLabel shrink htmlFor='updated-by'>
                                Updated by
                            </InputLabel>
                            <BootstrapInput
                                name='updated_by'
                                fullWidth
                                minRows={5}
                                placeholder='updated by'
                                id='updated-by'
                                required
                                onChange={handleOnChange}
                                helperText={errors.updated_by}
                                value={inputValues.updated_by}
                                error={errors.updated_by ? true : false}

                            />
                        </FormControl>
                    </Grid>




                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <FormControl variant='standard'>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked name='is_active' />}
                                    label='is active'
                                    sx={{ fontSize: '0.8rem' }}
                                    onChange={handleOnChange}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item align='center' md={12} sx={{ width: '100%' }}>
                        <BootstrapButton
                            onClick={handleOnSubmit}
                            aria-label='save and add another'
                            variant='contained'
                            sx={{
                                width: '20%',
                                height: '50px',
                                mt: 3,
                                ml: '60%'
                            }}
                        >
                            Save and add another
                        </BootstrapButton>
                    </Grid>



                </Grid>

            </Box>


        </Box>
    )
}



export default AddSoftwareTypeForm
