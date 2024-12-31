import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchFlights } from "../api/skyScrapper";

function SearchResults() {
  const { state } = useLocation();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await searchFlights(state);
        setFlights(data.flights || []);
      } catch (err) {
        setError("Failed to fetch flights.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [state]);

  if (loading) return <p>Loading flights...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="search-results">
      <h2>Flight Results</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              <p>Airline: {flight.airline}</p>
              <p>Price: {flight.price}</p>
              <p>Departure: {flight.departure}</p>
              <p>Arrival: {flight.arrival}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found.</p>
      )}
    </div>
  );
}

export default SearchResults;