import "./mfa.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { TextField } from "@mui/material";
const MFA = ()=>{


    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };

 return <>
   <React.Fragment>
       <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Verify Your Phone Number to Proceed Further
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              {/* <InputLabel htmlFor="max-width">OTP</InputLabel> */}
             
               <TextField variant="outlined" type="number"></TextField>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{alignSelf:"center"}}>
          <Button variant="contained" onClick={handleClose}>Verify</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
 <body>
    <div class="bg">
        <ul class="glass">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>
</>
}
export default MFA;