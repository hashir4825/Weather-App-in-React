import React from 'react';
import { useWeather } from './WeatherContext';

const Five = () => {
  const { fiveDayForecast } = useWeather();

  return (
<div className='p-7 m-7'>
      {fiveDayForecast && fiveDayForecast.list && fiveDayForecast.list.length > 0 && (
        <>
        <h2 className="text-center text-2xl text-white">Five Day Forecast</h2>
                  <div className="flex justify-around mt-5">
            {fiveDayForecast.list.slice(0, 5).map((day, index) => (
              <div key={index} className="flex flex-col items-center mr-4">
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="Weather Icon"
                  width="50"
                  height="50"
                />
                <p className="text-white">{day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Five;
