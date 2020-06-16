import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  error: { color: theme.palette.error.main },
  root: { width: '30%' },
  success: { color: theme.palette.primary }
}));

const Toast = ({ message, type = 'success' }) => {
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
        action={<Button color='inherit' onClick={() => toggleOpen(false)}><Close /></Button>}
        classes={{ root: classes[type] }}
        message={message}
      />
    </Snackbar>
  );
};

export default Toast;
