// FlightList.js
import React from 'react';
import FlightItem from './FlightItem';

const FlightList = ({ flights }) => {
  return (
    <ul>
      {flights.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </ul>
  );
};

export default FlightList;