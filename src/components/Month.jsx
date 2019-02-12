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
  let seasonColor;
  if(props.season === 'winter'){
    seasonColor = '#ADD8E6';
  } else if(props.season === 'spring'){
    seasonColor = '#4E9258';
  } else if(props.season === 'summer'){
    seasonColor ='#F2BB66';
  } else if(props.season === 'fall'){
    seasonColor = '#F87431';
  };

  const seasonStyle = {
    backgroundColor: seasonColor,
  }

  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.monthPanel} style={seasonStyle}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.month}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <span>Availble in the month of {props.month}: </span>
            {props.selection.map((item,index) =>
              <span key={index}>{item} </span>
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
  season: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default withStyles(styles)(Month);
