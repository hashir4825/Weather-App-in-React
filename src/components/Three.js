import React from 'react';
import { useWeather } from './WeatherContext'; // Adjust the import path if needed
import CurrentLocation from './CurrentLocation';

const Three = () => {
  const { weather } = useWeather();

  return (
    <div className='p-4 m-4 bg-blue-300'>
      {weather ? (
        <>
          <h2>Weather in {weather.name}</h2>
          <span>Icon
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" /></span>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Minimum Temperature: {weather.main.temp_min}°C</p>
          <p>Maximum Temperature: {weather.main.temp_max}°C</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
        </>
      ) : (
        <p><CurrentLocation/></p>
      )}
    </div>
  );
}

export default Three;
