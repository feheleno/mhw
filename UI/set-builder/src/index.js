import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

WebFont.load({
    google:{
        families: ['Roboto:300,400,500']
    }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(170, 130, 116, 0.88)',
      main: 'rgb(121, 85, 72, 0.88)',
      dark: 'rgb(75, 44, 32, 0.88)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgb(240, 84, 68, 0.88)',
      main: 'rgb(184, 28, 28, 0.88)',
      dark: 'rgb(128, 0, 0, 0.88)',
      contrastText: '#fff',
    },
  },
});


ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
