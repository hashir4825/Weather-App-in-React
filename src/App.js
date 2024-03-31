import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import Three from './components/Three';
import Four from "./components/Four";
import SearchBar from "./components/SearchBar";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import One from './components/One';

function App() {
  // const fetchWeatherForecast = async () => {
  //   const apiKey = "baafed74ddd9f05c52673a3bd435bb33";
  //   const lat = "33.6844"; // Islamabad's latitude
  //   const lon = "73.0479"; // Islamabad's longitude
  //   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //     return null;
  //   }
  // };
  return (
    <WeatherProvider>
<div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-blue-700 to-cyan-700 h-fit shadow-xl shadow-gray-400">

        <SearchBar />
        {/* <CurrentLocation /> */}
        <div className="App flex flex-row bg-yellow-300">
          <div className="w-1/2 p-4">
            <One />
          </div>
          <div className="w-1/2 p-4">
            <Three />
          </div>
        </div>
        <Four />
        <TemperatureAndDetails/>
      </div>
    </WeatherProvider>
  );
}

export default App;
