import React from 'react';
import Weekday from './Weekday';
import Year from './Year';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
// import { Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    useNextVariants: true,
   fontSize: 16,
    }
});

function App(){

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Weekday />
      </MuiThemeProvider>
      <MuiThemeProvider theme={theme}>
        <Year />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
