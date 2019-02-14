import React from 'react';
import Weekday from './Weekday';
import Year from './Year';
import Header from './Header';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


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
      <Header />
      <Switch>
        <Route exact path='/' component={Weekday} />
        <Route path='/Year' component={Year} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
