import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
import { UserActions } from '../Utils/HelperText';

export default function AlertDialog(props) {

    const { handleClose, open , anchorEl  , handleUserAction , user, softwareList,handleUpdateSoftwareForm} = props



    React.useEffect(()=>{

        



    },[])


    return (
        <div>
            <Dialog
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Update Software"}
                </DialogTitle>
                

               
                {/* {softwareList.map((row)=>( */}
                     
                  
                <DialogContent
                
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        bgcolor: 'transparent',
                        position: 'relative',
                        



                    }}>
                    <TextField
                        id="Softwarename"
                        label="Software Name"
                        type="software name"
                        variant="filled"
                        name='name'
                        


                    ></TextField>
                    <TextField
                        id="Discription"
                        label="Discription"
                        type="Discription"
                        variant="filled"
                        name='discription'>
                        
                       </TextField>
                     

                </DialogContent>
                     {/* ))} */}
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
       
                    <Button onClick={handleUpdateSoftwareForm} autoFocus>
                    {/* <Button onClick={()=>handleUserAction(user, UserActions.EDIT)} autoFocus> */}
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
