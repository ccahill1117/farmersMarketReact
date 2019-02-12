import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';



function PaperSheet(props) {

  return (
      <Paper elevation={1} >
        <Typography variant="h5" component="h3">
          {props.day}
        </Typography>
        <Typography component="h5">
          {props.location}
          <hr />
         <strong>Booth: {props.booth}</strong> --
          {props.hours}
        </Typography>
      </Paper>
  );
}

PaperSheet.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};


export default (PaperSheet);
