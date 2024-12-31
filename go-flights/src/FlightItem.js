// FlightItem.js
import React from 'react';

const FlightItem = ({ flight }) => {
  return (
    <li>
      <p>{flight.airline} - {flight.price}</p>
      <p>From {flight.origin} to {flight.destination}</p>
      <p>Departure: {flight.departure}</p>
    </li>
  );
};

export default FlightItem;