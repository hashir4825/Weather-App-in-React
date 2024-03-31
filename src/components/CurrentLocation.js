import React, { useEffect, useState } from 'react';

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
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
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
    <>
      {location ? (
        <>
          <h2>Weather in {weatherData?.name || 'your location'}</h2>
          <p>Temperature: {weatherData?.main?.temp}°C</p>
          <p>Description: {weatherData?.weather?.[0]?.description}</p>
        </>
      ) : (
        <p>Please allow location access to view weather data.</p>
      )}
    </>
  );
};

export default CurrentLocation;
