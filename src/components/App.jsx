import React from 'react';
import Weekday from './Weekday';
import Year from './Year';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
