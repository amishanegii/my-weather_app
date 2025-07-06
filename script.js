const apiKey = "2be15fda9e777ee170a688b7f32cb43a";

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
