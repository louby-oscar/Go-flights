import axios from "axios";

const API_URL = "https://sky-scrapper.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY, // Add your API key in .env file
  },
});

// Search for flights
export const searchFlights = async (params) => {
  try {
    const response = await apiClient.get("/flights/search", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data", error);
    throw error;
  }
};