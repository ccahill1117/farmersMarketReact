import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  monthPanel: {
    margin: '10px',
  }
});

function Month(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.monthPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.month}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.selection.map((item,index) =>
              <span>{item} </span>
            )}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Month.propTypes = {
  classes: PropTypes.object.isRequired,
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default withStyles(styles)(Month);

// function Month(props) {
//   return (
//     <div>
//       <Paper elevation={1} >
//         <Typography variant="h5" component="h3">
//           {props.month}
//         </Typography>
//         <Typography component="ul">
//          {props.selection.map((fruit, index) =>
//            <li>{fruit}</li>
//          )}
//         </Typography>
//       </Paper>
//     </div>
//   );
// }
//
// Month.propTypes = {
//   month: PropTypes.string,
//
// };
//
//
// export default Month;
