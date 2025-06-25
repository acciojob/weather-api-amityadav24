document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "743222f8e823d16cf419a6290847ebb8";
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in London: ${weatherDescription}`;
    })
    .catch((error) => {
      document.getElementById("weatherData").innerText = "Error fetching weather data.";
      console.error(error);
    });
});
