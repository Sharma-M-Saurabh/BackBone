import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import OPActionPopover from '../../Common/OPActionPopover';

const SoftwareTypeList = (props) => {
    console.log(props);
    const {softwareList} = props;
    console.log(softwareList);

    const [anchorEl, setAnchorEl] = React.useState(null);

    // const softwaretypeList = Object.keys(softwareList).map((key) => softwareList[key]);
    // console.log('softwareList',softwareList)



    const theme = useTheme();


    const handlSoftwareActions = (event) => {
        // event.stopPropagation();

        setAnchorEl(event.currentTarget);
    }

     const open = Boolean(anchorEl);

     const handleClose = () => {
        setAnchorEl(null);
      };


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
                    aria-label='Software List'
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
                                    onClick={(event) => handlSoftwareActions(event ,row)
                                     
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

            <OPActionPopover

                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}



                




            />



        </Box>

    )
};

export default SoftwareTypeList
