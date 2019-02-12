import React from 'react';
import PropTypes from 'prop-types';

function WeekdayCard(props){
  return (
    <div>

      <h1>{props.day}</h1>
      <h3>{props.location}</h3>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

WeekdayCard.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default WeekdayCard;
