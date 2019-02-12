import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function Month(props) {

  return (
    <div>
      <Paper elevation={1} >
        <Typography variant="h5" component="h3">
          {props.month}
        </Typography>
        <Typography component="ul">
         {props.selection.map((fruit, index) =>
           <li>{fruit}</li>
         )}
        </Typography>
      </Paper>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,

};


export default Month;
