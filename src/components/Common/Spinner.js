import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  progress: {
    margin: 0,
    position: 'absolute',
    top: '35%',
    left: '50%'
  }
});

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Box className={classes.progress}>
      <CircularProgress color='secondary' />
    </Box>
  );
}
