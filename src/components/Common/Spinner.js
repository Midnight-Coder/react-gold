import React from 'react';
import { makeStyles } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


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
