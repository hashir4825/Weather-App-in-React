import React from "react";
import { useWeather } from "./WeatherContext";
import CurrentLocation from "./CurrentLocation"; // Adjust the import path if needed
import {
  UilTemperature,
  UilSun,
  UilSunset,
  UilWind,
  UilTear,
  UilLocationPoint,
} from "@iconscout/react-unicons";


const WeatherDescription = () => {
  const { weather } = useWeather();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div
      style={{
        // backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
      className="p-7 m-7"
    >
      {weather ? (
        <>
          <div className="text-center text-2xl text-white">
            Timezone:{" "}
            {new Date(
              weather.dt * 1000 + weather.timezone * 1000
            ).toLocaleTimeString("en-US", { timeZoneName: "short" })}
          </div>

          <div className="flex justify-between text-white text-lg items-center mt-12">
            <div className="flex flex-row text-4xl">
              {" "}
              <UilLocationPoint size={40} className="mr-1" />
              {weather.name}
            </div>
            <div className="text-4xl">{Math.floor(weather.main.temp)}°C</div>
          </div>

          <div className="flex flex-col justify-center items-center m-4 p-4">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
                className="h-25 w-20"
              />
            </div>
            <div className="text-white text-lg">
              Description:{" "}
              {capitalizeFirstLetter(weather.weather[0].description)}
            </div>
          </div>
          <div className="flex justify-between text-white text-md items-center mt-12">
            <div className="flex flex-col items-center">
              <UilSunset size={24} className="mr-1" />
              <span>
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <UilSun size={24} className="mr-1" />
              <span>
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <UilTear size={24} className="mr-1" />
              <span>{weather.main.humidity}%</span>
            </div>
            <div className="flex flex-col items-center">
              <UilTemperature size={24} className="mr-1" />
              <span>{weather.main.feels_like}°C</span>
            </div>
            <div className="flex flex-col items-center">
              <UilWind size={24} className="mr-1" />
              <span>{weather.wind.speed} km/h</span>
            </div>
          </div>
        </>
      ) : (
        <CurrentLocation />
      )}
    </div>
  );
};

export default WeatherDescription;
