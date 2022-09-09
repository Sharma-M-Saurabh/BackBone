import { Box, FormControl, FormHelperText, Grid, InputLabel, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BootstrapButton, TextArea } from '../Styled/TextArea'
import { BootstrapInput } from '../Styled/TextField';

const SoftwareType = () => {
    const [inputValues , setInputValue] = useState({
        softwaresubtype : '',
        computersoftwaretype : '',
        softwarename : '',
        version : '',
        port : '',
        subtype : '',
        description : ''
    })
    const [errors , setErrors] = useState({
        softwaresubtype : '',
        computersoftwaretype : '',
        softwarename : '',
        version : '',
        port : '',
        subtype : '',
        description : ''
    })


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
        };
    };

    const validateForm = (name, value) => {
        switch (name) {
            case 'softwaresubtype':
                if (!value || value.trim() === '') {
                    return 'software subtype is required';
                } else {
                    return '';
                }

            case 'computersoftwaretype':
                if (!value || value.trim() === '') {
                    return 'description is required';
                } else {
                    return '';
                }

            case 'softwarename':
                if (!value || value.trim() === '') {
                    return 'fill created by user name';
                } else {
                    return '';
                }

            case 'version':
                if (!value || value.trim() === '') {
                    return 'fill updated by user name';
                } else {
                    return '';
                }
            case 'port':
                if (!value || value.trim() === '') {
                    return 'fill updated by user name';
                } else {
                    return '';
                }

                case 'description':
                if (!value || value.trim() === '') {
                    return 'description is required';
                } else {
                    return '';
                }
                case 'subtype':
                if (!value || value.trim() === '') {
                    return 'subtype is required';
                } else {
                    return '';
                }

            default: {
                return '';
            }
        }
    };

    const handleOnChange = (event) => {
        const { name } = event.target;

        const value =
            event.target.name === 'agree' ? event.target.checked : event.target.value;

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
                            Software
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
                                Software Sub Type
                            </InputLabel>
                            <BootstrapInput
                                name='softwaresubtype'
                                fullWidth
                                placeholder='Software Sub Type'
                                id='software-sub-type'
                                required
                                onChange={handleOnChange}
                                helperText={errors.softwaresubtype}
                                value={inputValues.softwaresubtype.value}
                                error={errors.softwaresubtype ? true : false}

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
                            <InputLabel shrink htmlFor='computer-software-type'>
                                Computer Software Type
                            </InputLabel>
                            <BootstrapInput
                                name='computersoftwaretype'
                                fullWidth
                                placeholder='computer software Type'
                                id='computer-software-type'
                                required
                                onChange={handleOnChange}
                                helperText={errors.computersoftwaretype}
                                value={inputValues.computersoftwaretype.value}
                                error={errors.computersoftwaretype ? true : false}


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
                            <InputLabel shrink htmlFor='name'>
                            software Name
                            </InputLabel>
                            <BootstrapInput
                                name='softwarename'
                                fullWidth
                                placeholder='softwarename'
                                id='softwarename'
                                required
                                onChange={handleOnChange}
                                helperText={errors.softwarename}
                                value={inputValues.softwarename.value}
                                error={errors.softwarename ? true : false}


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
                            <InputLabel shrink htmlFor='version'>
                                Version
                            </InputLabel>
                            <TextArea
                            id={"version"}
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="version"
                            defaultValue=""
                            name="version"
                            // value={inputValues.version.value}
                            onChange={handleOnChange}
                            style={{
                                width: "100%",
                                height: 100,
                                backgroundColor: "#1A202C",
                                resize: "vertical",
                                color: "#fff",
                                border: errors.version ? '1px solid red' : 'none',
                            }}
                        />
                        <FormHelperText error={errors.version ? true : false}
                        >
                            {errors.version}
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
                            <InputLabel shrink htmlFor='port-number'>
                                Port Number
                            </InputLabel>
                            <TextArea
                            id={"port"}
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="port"
                            defaultValue=""
                            name="port"
                            // value={inputValues.port.value}
                            onChange={handleOnChange}
                            style={{
                                width: "100%",
                                height: 100,
                                backgroundColor: "#1A202C",
                                resize: "vertical",
                                color: "#fff",
                                border: errors.port ? '1px solid red' : 'none',
                            }}
                        />
                        <FormHelperText error={errors.port ? true : false}
                        >
                            {errors.port}
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
                            <InputLabel shrink htmlFor='sub-types'>
                                Sub Types
                            </InputLabel>
                            <TextArea
                            id={"subtype"}
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="subtype"
                            defaultValue=""
                            name="subType"
                            // value={inputValues.subtype.value}
                            onChange={handleOnChange}
                            style={{
                                width: "100%",
                                height: 100,
                                backgroundColor: "#1A202C",
                                resize: "vertical",
                                color: "#fff",
                                border: errors.subtype ? '1px solid red' : 'none',
                            }}
                        />
                        <FormHelperText error={errors.subtype ? true : false}
                        >
                            {errors.subtype}
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
                            <InputLabel shrink htmlFor='Description'>
                            Description
                            </InputLabel>
                            <TextArea
                            id={"description"}
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Description"
                            defaultValue=""
                            name="description"
                            // value={inputValues.description.value}
                            onChange={handleOnChange}
                            style={{
                                width: "100%",
                                height: 100,
                                backgroundColor: "#1A202C",
                                resize: "vertical",
                                color: "#fff",
                                border: errors.description ? '1px solid red' : 'none',
                            }}
                        />
                        <FormHelperText error={errors.description ? true : false}
                        >
                            {errors.description}
                        </FormHelperText>
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
                            Submit
                        </BootstrapButton>
                    </Grid>




                </Grid>

            </Box>


        </Box>
    )
}

export default SoftwareType
