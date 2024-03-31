import React from 'react';
import { useWeather } from './WeatherContext';

const Five = () => {
  const { fiveDayForecast } = useWeather();

  return (
    <div className='p-4 m-4 bg-blue-300'>
      {fiveDayForecast && fiveDayForecast.list && fiveDayForecast.list.length > 0 && (
        <>
          <h2>Five-Day Forecast</h2>
          {fiveDayForecast.list.slice(0, 5).map((day, index) => (
            <div key={index}>
              <h3>{day.dt_txt}</h3>
              <p>Main Weather: {day.weather[0].main}</p>
              <p>Description: {day.weather[0].description}</p>
              {day.rain && <p>Rain Volume: {day.rain['3h']} mm</p>}
              {day.weather[0].icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="Weather Icon"
                  width="50"
                  height="50"
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Five;
