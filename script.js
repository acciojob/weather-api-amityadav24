document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "e467712b257e418838be97cc881a71de"; // Must match what Cypress intercepts
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

  fetch(url, { cache: "no-store" }) // prevents caching issues
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
