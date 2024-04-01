import React from "react";
import { WeatherProvider } from "./components/WeatherContext";
import Four from "./components/Four";
import SearchBar from "./components/SearchBar";
import One from "./components/One";
import Five from "./components/Five";
import CurrentLocation from "./components/CurrentLocation";

function App() {
  return (
    <WeatherProvider><div style={ { width: '800px', margin: '0 auto', backgroundImage: ' linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }} className="mt-4 py-5 px-16 h-fit shadow-xl shadow-gray-400">



      {/* <CurrentLocation/> */}

        <SearchBar />
        <One />
        <Five />

        {/* <Four /> */}
      </div>
    </WeatherProvider>
  );
}

export default App;
