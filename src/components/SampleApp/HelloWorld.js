import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const HelloWorld = ({ status }) => (
  <Card>
    <CardContent>
      <Typography paragraph variant='h1' color='primary'>Welcome To React-Gold</Typography>
      <Typography variant='caption'>Gold Standard for a SPA in 2020</Typography>
      <Typography variant='subtitle1'>{`API Status: ${status}`}</Typography>
    </CardContent>
  </Card>
);

export default HelloWorld;
