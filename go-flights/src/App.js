// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import FlightList from './FlightList';

const App = () => {
  const [flights, setFlights] = useState([]);

  const fetchFlights = async (origin, destination, date) => {
    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/FLIGHT_SEARCH_API_ENDPOINT',
      params: {
        origin,
        destination,
        date,
      },
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        // Additional headers if needed
      },
    };

    try {
      const response = await axios.request(options);
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (
    <div>
      <h1>Google Flights Clone</h1>
      <SearchForm onSearch={fetchFlights} />
      <FlightList flights={flights} />
    </div>
  );
};

export default App;
