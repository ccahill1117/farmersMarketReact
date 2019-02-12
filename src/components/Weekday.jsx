import React from 'react';
import PaperSheet from './PaperSheet';

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
    color: "#f0ead6"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
    color: "orange"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
    color: "tomato"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
    color: "salmon"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
    color: "#aec6cf"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
    color: "pink"
 }
];



function Weekday(){
  var myWeekdayGrid = {
  display: 'grid',
  gridGap: '1em',
  padding: '20px',
  gridTemplateColumns: 'repeat(auto-fit, 200px)',

}


  return (
    <div style={myWeekdayGrid}>
      {marketSchedule.map((weekday, index) =>
        <PaperSheet day ={weekday.day}
          location={weekday.location}
          hours={weekday.hours}
          booth={weekday.booth}
          color={weekday.color}
          key={index}
          />
      )}
    </div>
  );
}

export default Weekday;
