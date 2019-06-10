import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

function AlertDialog(props) {
  const { open, handleClose, handleSubmit } = props;

  const [name, setName] = useState('');

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Create new config for match"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">Type name of config</DialogContentText>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={() => handleSubmit({ name }).then(() => handleClose())} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );

}

export default AlertDialog;