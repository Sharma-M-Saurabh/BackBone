import { Avatar, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useTheme } from '@mui/material'
import React from 'react'

const AddSoftwareList = (props) => {
    const { getsoftwareList } = props;
    const theme = useTheme();

    const softwareList = Object.keys(getsoftwareList).map((key) => getsoftwareList[key]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'secondary.main',
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
                                        height : '8vh',
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

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </Box>
    )
}

export default AddSoftwareList
