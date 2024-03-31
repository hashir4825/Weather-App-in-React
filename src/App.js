import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import Three from './components/Three';
import Four from "./components/Four";
import SearchBar from "./components/SearchBar";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import One from './components/One';
import Five from './components/Five';

function App() {

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
        <Five />
      </div>
    </WeatherProvider>
  );
}

export default App;
