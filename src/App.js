import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
import Store from 'Store';
import Theme from 'Theme';


export default function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <div className='App'>
            <Router />
          </div>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}
