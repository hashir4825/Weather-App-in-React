const fetchWeatherForecast = async (cityName) => {
  const apiKey = "baafed74ddd9f05c52673a3bd435bb33";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if the city is not found (404 status code)
    if (response.status === 404) {
      alert("City not found. Please enter a valid city name.");
      return null;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};

export default fetchWeatherForecast;
