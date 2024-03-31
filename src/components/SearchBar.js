import React, { useState } from 'react';
import { useWeather } from './WeatherContext';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather, fetchWeatherForFiveDays } = useWeather();

  const handleSearch = () => {
    if (typeof city === 'string' && city.trim() !== '') {
      fetchWeather(city.trim());
      fetchWeatherForFiveDays(city.trim()); // Fetch five-day forecast along with current weather
    } else {
      console.error('Invalid city name:', city);
      // Handle invalid city name (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-md mx-auto p-2">
      <div className="relative flex items-center">
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none"
          placeholder="Search city here..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button
          type="button" // Prevents form submission
          className="text-white bg-green-500 hover:bg-blue-500 font-medium rounded-sm text-sm px-4 py-2 ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
