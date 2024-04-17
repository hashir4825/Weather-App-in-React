function fetchWeatherByCityName(city) {
  const apiKey = "baafed74ddd9f05c52673a3bd435bb33";
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).then((response) => {
      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city name.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the weather data to the console
      return data;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error.message);
      return null;
    });
}
export default fetchWeatherByCityName;