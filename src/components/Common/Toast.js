import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { makeStyles } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  error: { color: theme.palette.error.main },
  root: { width: '30%' },
  success: { color: theme.palette.primary }
}));

export default function Toast({ message, type = 'success' }) {
  const classes = useStyles();
  const [isOpen, toggleOpen] = React.useState(true);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
      classes={{ root: classes.root }}
      onClose={() => toggleOpen(false)}
      open={isOpen}
    >
      <SnackbarContent
        action={<Button color='inherit' onClick={() => toggleOpen(false)}><CloseIcon /></Button>}
        classes={{ root: classes[type] }}
        message={message}
      />
    </Snackbar>
  );
}
