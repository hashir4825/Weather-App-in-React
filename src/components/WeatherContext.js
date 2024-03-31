import React, { createContext, useState, useContext } from 'react';
import fetchWeatherByCityName from './LocationByCityName';

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    if (city.trim() !== '') {
      const weatherData = await fetchWeatherByCityName(city);
      setWeather(weatherData);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
