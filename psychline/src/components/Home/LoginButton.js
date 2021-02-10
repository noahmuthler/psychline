import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import brainPic from './brain.jpg';

import "./LoginButton.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="log">
        login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
            <span style={{color: 'black'}}>login</span>
            <CloseIcon onClick={handleClose} className="closeButton" />
        </DialogTitle>
        <DialogContent>
          <img src={brainPic} className="logo"/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="email address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <div className="link">
                <Link href="" >
                    make an account
                </Link>
                 ~ 
                <Link href="">
                    forget password
                </Link>
            </div>
            
          <Button onClick={handleClose} color="primary">
                Login
          </Button>
          
          
        </DialogActions>
      </Dialog>
    </div>
  );
}