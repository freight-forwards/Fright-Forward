import "./mfa.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
const MFA = ()=>{


    const [open, setOpen] = React.useState(false);
    const [otp, setOtp] = React.useState();
  
    const handleLogin = () => {
      localStorage.setItem("logIn",true)
    };
  
    const handleClose = () => {
      setOpen(false);
    };


 return <>
   <React.Fragment>
       <Dialog
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>Enter OTP For MultiFactor Authantication</DialogTitle>
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
             
               <TextField variant="outlined" type="number" sx={{
                "input::-webkit-inner-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0
                },
                "input::-webkit-outer-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0
                }
                
               }}
               value={otp}
               onChange={(e)=>setOtp(e.target.value)}
               ></TextField>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{alignSelf:"center"}}>
          <Link
           style={{minWidth:'115px'}}
              onClick={handleLogin}
              to={otp=="098789"?"/":null}
              className="w-full mt-3 bg-gray-300 font-sans
               hover:bg-red-500 mb-2
               text-lg py-2 rounded shadow text-white outline-none 
               focus:outline-none ease-linear transition-all duration-150"
                type="button">
                        Log In
              </Link>
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