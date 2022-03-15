import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { HelpOutline } from '@material-ui/icons';
import React from 'react';


export default function HelloWorld({ status }) {
  return (
    <Card>
      <CardContent>
        <Typography paragraph variant='h1' color='primary'>Welcome To React-Gold</Typography>
        <Box display='flex' justifyContent='flex-start'>
          <Typography component='span' variant='subtitle1'>Gold Standard for a SPA in 2020</Typography>
          <Tooltip title='This is a boilerplate and code structure demonstration built in 2020'>
            <HelpOutline style={{ fontSize: 15 }} />
          </Tooltip>
        </Box>
        <Typography variant='body2'>{`API Status: ${status}`}</Typography>
      </CardContent>
    </Card>
  );
}
