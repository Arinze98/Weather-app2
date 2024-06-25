import './input.css';
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

// Main App component
function App() {
  // State to hold the city name
  const [city, setCity] = useState('');
  // State to hold the weather data
  const [weather, setWeather] = useState(null);

  // API key for the weather service
  const API_KEY = 'c4ad6636911a35489dcaa909843b2bf3';

  // Function to fetch weather data
  const getWeather = async (e) => {
    e.preventDefault();
    try {
      // API call to fetch weather data
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      // Set the weather data to state
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Get Weather
          </button>
        </form>
        {weather && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p className="text-gray-700">{weather.weather[0].description}</p>
            <p className="text-gray-700">{weather.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
