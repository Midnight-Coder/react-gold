import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';


export default function HelloWorld({ status }) {
  return (
    <Card>
      <CardContent>
        <Typography paragraph variant='h1' color='primary'>Welcome To React-Gold</Typography>
        <Box display='flex' justifyContent='flex-start'>
          <Typography component='span' variant='subtitle1'>Opinionated Boilerplate For A Material UI - React - Redux web app</Typography>
        </Box>
        <Typography variant='body2'>{`API Status: ${status}`}</Typography>
      </CardContent>
    </Card>
  );
}
