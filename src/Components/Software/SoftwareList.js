import { Avatar, Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import AlertDialog from '../../Common/Popup';
import { SoftwareActions } from '../../Utils/HelperText';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const SoftwareList = (props) => {
    console.log('props', props)
    const { getsoftwareList, handleUserAction,handleUpdateSoftwareForm } = props;

   

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

       handleAction(SoftwareActions.EDIT) 






        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    const handleAction = (user, action) => {
        console.log('............', action);

        setUser(user);


        handleUserAction(user, action);
    };

    const [user, setUser] = useState(null);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    // const id = open ? 'edit-user-popover' : undefined;


    const handleSoftwareActions = (event, userData) => {
        // event.stopPropagation();
        setUser(userData);
        console.log('userdata', userData)
    };

    // useEffect(() => {
    //     if (handleUserAction === SoftwareActions.EDIT) {
    //       const newInputValues = {
    //         name: user.name ? user.name : '',
    //         discription: user.discription ? user.discription : '',
           
    //       };
    //       setInputValue(newInputValues);
    //     } else {
    //       setInputValue(defaultInputValues);
    //     }
    //   }, [user, handleUserAction]);




    const theme = useTheme();


    const softwareList = Object.keys(getsoftwareList).map((key) => getsoftwareList[key]);
    console.log('softwareList',softwareList)


    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#860086',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 20,
                    py: theme.spacing(2),
                }}
            >
                SoftwareTypes List
            </Typography>
            {/* {softwareList.length > 0 && ( */}
            <TableContainer component={Paper}>
                <Table
                    sx={{
                        minWidth: '90%',
                    }}
                    aria-label='User List'
                >
                    <TableBody>
                        <TableRow
                            sx={{
                                borderTop: 7,
                                borderBottom: 7,
                                borderColor: theme.palette.secondary.main,
                                borderRadius: 20,


                            }}>
                            <TableCell>Software Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Created By</TableCell>
                            <TableCell>Updated By</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>Others</TableCell>
                        </TableRow>

                        {softwareList.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    borderTop: 7,
                                    borderBottom: 7,
                                    borderRadius: 20,
                                    borderColor: theme.palette.secondary.main,
                                    cursor: 'pointer',
                                }}

                            >
                                <TableCell
                                    sx={{
                                        borderRadius: 15,
                                        height: '8vh',
                                        px: 0.5,
                                        py: 0.5,
                                        textTransform: 'capitalize',
                                    }}
                                    align='left'
                                >
                                    {row.name}

                                </TableCell>
                                <TableCell
                                    sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                                    align='left'
                                >
                                    {row.discription}

                                </TableCell>
                                <TableCell
                                    sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                                    align='left'
                                >
                                    {row.created_by}

                                </TableCell>
                                <TableCell
                                    sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                                    align='left'
                                >
                                    {row.updated_by}
                                </TableCell>
                                <TableCell
                                    sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                                    align='left'
                                >
                                    {row.is_active.toString()}
                                </TableCell>
                                <TableCell
                                    sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                                    align='left'
                                >
                                    <IconButton
                                    onClick={(event) => handleSoftwareActions(event ,row)
                                     
                                    }
                                >
                                    <EditOutlinedIcon />
                                </IconButton>

                                </TableCell>
                                

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <AlertDialog
            open={open}
            user={user}
            handleClose={handleClose}
            handleUserAction={handleUserAction}
            softwareList={softwareList}
            handleUpdateSoftwareForm={handleUpdateSoftwareForm}




            /> */}



        </Box>
    )
}

export default SoftwareList
