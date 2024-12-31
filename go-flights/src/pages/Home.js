import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { ...formData } });
  };

  return (
    <div className="home-container">
      <h1>Find Your Flight</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={formData.origin}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="adults"
          placeholder="Adults"
          value={formData.adults}
          onChange={handleChange}
          required
        />
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
}
export default Home;