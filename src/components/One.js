import React from 'react';
import { useWeather } from './WeatherContext'; // Adjust the import path if needed
import { UilTemperature, UilClouds, UilSun, UilSunset, UilWind,UilTear } from "@iconscout/react-unicons";

const One = () => {
  const { weather } = useWeather();

  return (
<div className='p-4 m-4 bg-gradient-to-br from-blue-700 to-cyan-700'>
  {weather ? (
    <>
      <div className="flex flex-col space-y-2 text-white text-left">
        <div className="flex  text-md items-center">
          <UilTemperature size={19} className="mr-1" />
          Temperature: {weather.main.temp}°C
        </div>
        <div className="flex  text-md items-center">
          <UilClouds size={19} className="mr-1" />
          Description: {weather.weather[0].description}
        </div>
        <div className="flex text-md items-center">
          <UilTemperature size={19} className="mr-1" />
          Real feel: {weather.main.feels_like}°C
        </div>
        <div className="flex text-md items-center">
          <UilTear size={19} className="mr-1" />
          Humidity: {weather.main.humidity}%
        </div>
        <div className="flex text-md items-center">
          <UilWind size={19} className="mr-1" />
          Wind: {weather.wind.speed} km/h
        </div>
        <div className="flex text-md items-center">
          <UilSun size={19} className="mr-1" />
          Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </div>
        <div className="flex text-md items-center">
          <UilSunset size={19} className="mr-1" />
          Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  )}
</div>

  
  );
}

export default One;
