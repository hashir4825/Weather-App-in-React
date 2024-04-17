import React, { useEffect ,useState} from "react";
import { useWeather } from "./components/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherDescription from "./components/WeatherDescription";
import FiveDayDescription from "./components/FiveDayDescription";
import clouds from "./components/clouds.avif";
import clear from "./components/clear.jpeg";
import fog from "./components/fog.jpg";
import thunderstorm from "./components/thunderstorm.jpg"
import rain from "./components/rain.avif";
import snow from "./components/snow.avif";
import tornado from "./components/tornado.webp";
import defaultpic from "./components/default.webp";

function App() {
  const { weather } = useWeather();

  const [backgroundPic, setBackgroundPic] = useState(`url(${defaultpic})`); // Default background pic

  useEffect(() => {
    if (weather) {
      const description = weather.weather[0].description.toLowerCase();
      if (description.includes('clouds')) {
        setBackgroundPic(`url(${clouds})`);
      } else if (description.includes('mist')) {
        setBackgroundPic(`url(${fog})`);
      }
      else if (description.includes('haze')) {
        setBackgroundPic(`url(${fog})`);
      }
      else if (description.includes('dust')) {
        setBackgroundPic(`url(${fog})`);
      }
      else if (description.includes('smoke')) {
        setBackgroundPic(`url(${fog})`);
      }
      else if (description.includes('fog')) {
        setBackgroundPic(`url(${fog})`);
      }
      else if (description.includes('thunderstorm')) {
        setBackgroundPic(`url(${thunderstorm})`);
      }
       else if (description.includes('clear')) {
        setBackgroundPic(`url(${clear})`);
      }
      else if (description.includes('rain')) {
        setBackgroundPic(`url(${rain})`);
      }
      else if (description.includes('drizzle')) {
        setBackgroundPic(`url(${rain})`);
      }
      else if (description.includes('tornado')) {
        setBackgroundPic(`url(${tornado})`);
      }
      else if (description.includes('snow')) {
        setBackgroundPic(`url(${snow})`);
      }
      else {
        setBackgroundPic(`url(${defaultpic})`);
      }
    }
  }, [weather]);

  return (
    <div
      style={{
        margin: '0 auto',
        position: 'relative',
        backgroundImage: backgroundPic,
        backgroundBlendMode: 'hard-light', // Blend with black background color
        backgroundColor: 'black', // Black background color
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '60%',
        height: '10%',
      }}
      className="mt-4 py-5 px-16 h-fit shadow-xl shadow-gray-400"
    >
      {
      // If backgroundBlendMode was not used then the picture can be adjusted by the following code whih is overlay and it means that the div of color black will be placed on the main div

      /* <div
        style={{
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // width: '100%',
          // height: '100%',
          // backgroundColor: 'rgba(42, 42, 42, 0.4)',
        }}
      /> */}
      <SearchBar />
      <WeatherDescription />
      <FiveDayDescription />
    </div>
  );
}

export default App;
