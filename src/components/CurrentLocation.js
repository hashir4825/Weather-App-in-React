import React, { useEffect, useState } from 'react';
import {
  UilTemperature,
  UilSun,
  UilSunset,
  UilWind,
  UilTear,
  UilLocationPoint,
} from "@iconscout/react-unicons";
import gif from './gif.webp'; // Adjust the path to your GIF file

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'baafed74ddd9f05c52673a3bd435bb33'; // Your OpenWeatherMap API key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
          // Handle the error (e.g., show a message to the user)
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle the lack of geolocation support (e.g., show a message to the user)
    }

    // Cleanup function
    return () => {
      // Any cleanup code (if needed)
    };
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherByCoordinates(location.lat, location.lon);
    }
  }, [location]);

  const fetchWeatherByCoordinates = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Weather data for current location:', data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        // Handle the API request error (e.g., show a message to the user)
      });
  };

  return (
    <div
      style={{
        // backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
      className="p-7 m-7"
    >
      {weatherData ? (
        <>
          <div className="text-center text-2xl text-white">
            Timezone:{" "}
            {new Date(
              weatherData.dt * 1000 + weatherData.timezone * 1000
            ).toLocaleTimeString("en-US", { timeZoneName: "short" })}
          </div>

          <div className="flex justify-between text-white text-lg items-center mt-12">
            <div className="flex flex-row text-4xl">
              {" "}
              <UilLocationPoint size={40} className="mr-1" />
              {weatherData.name}
            </div>
            <div className="text-4xl">{Math.floor(weatherData.main.temp)}°C</div>
          </div>

          <div className="flex flex-col justify-center items-center m-4 p-4">
          <div>
  <img
    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
    alt="Weather Icon"
    className="h-25 w-20"
  />
</div>

            <div className="text-white text-lg">
              Description:{" "}
              {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}
            </div>
          </div>
          <div className="flex justify-between text-white text-md items-center mt-12">
            <div className="flex flex-col items-center">
              <UilSunset size={24} className="mr-1"  color="#FFA500 "/>
              <span>
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <UilSun size={24} className="mr-1"  color="#FFFF00" />
              <span>
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <UilTear size={24} className="mr-1"/>
              <span>{weatherData.main.humidity}%</span>
            </div>
            <div className="flex flex-col items-center">
              <UilTemperature size={24} className="mr-1"/>
              <span>{weatherData.main.feels_like}°C</span>
            </div>
            <div className="flex flex-col items-center">
              <UilWind size={24} className="mr-1" />
              <span>{weatherData.wind.speed} km/h</span>
            </div>
          </div>
        </>
      ) : (
        <>
        <h1 className='text-center text-lg text-white mt-4'>Allow Location to show Current Weather</h1>
        <img src={gif} alt="GIF" />
        </>
      )}
    </div>
  );
};

export default CurrentLocation;
