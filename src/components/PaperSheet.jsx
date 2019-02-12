import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    margin: '10px',
    padding: '10px',
    fontFamily: "'Oswald', sans-serif",

};


function PaperSheet(props) {

  return (
    <div>
      <Paper elevation={1} style={styles}>
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
    </div>
  );
}

PaperSheet.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};


export default withStyles(styles)(PaperSheet);
