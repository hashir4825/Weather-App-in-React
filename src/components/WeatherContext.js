import React, { createContext, useState, useContext } from 'react';
import fetchWeatherByCityName from './LocationByCityName';
import fetchWeatherForecast from './WeatherforFiveDays';

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  const fetchWeather = async (city) => {
    if (city.trim() !== '') {
      const weatherData = await fetchWeatherByCityName(city);
      setWeather(weatherData);
    }
  };

  const fetchWeatherForFiveDays = async (city) => {
    if (city.trim() !== '') {
      const forecastData = await fetchWeatherForecast(city);
      setFiveDayForecast(forecastData);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, fiveDayForecast, fetchWeather, fetchWeatherForFiveDays }}>
      {children}
    </WeatherContext.Provider>
  );
};
