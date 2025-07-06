const apiKey = "0a776006126365bc0e36fafb33a5ac1c";

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const { name, main, weather, wind } = data;
      weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>🌡️ Temperature: ${main.temp} °C</p>
        <p>☁️ Weather: ${weather[0].description}</p>
        <p>💨 Wind Speed: ${wind.speed} m/s</p>
      `;
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
