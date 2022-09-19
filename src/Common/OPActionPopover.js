import { Button, Paper, Popover } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const OPActionPopover = (props) => {
    const { open, handleClose , anchorEl  } = props;
    return (
        <Popover
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}

           
          

        >
            <Box
                sx={{ flexDirection: 'column', display: 'flex', p: 0.5  }} component={Paper}>
                <Button variant='contained' sx={{ m: 0.5 ,bgcolor: 'tertiary.main'}}
                >
                    edit
                </Button>
                <Button
                 variant='contained'
                 sx={{ m: 0.5 ,bgcolor: 'tertiary.main'}}
                >
                    delete
                </Button>
                <Button
                 variant='contained'
                 sx={{m: 0.5 , bgcolor: 'tertiary.main' }}
                 >
                    update
                </Button>

            </Box>
        </Popover>
    )
}

export default OPActionPopover
