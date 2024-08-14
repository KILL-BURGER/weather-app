import React from "react";

function WeatherBox({ weather }) {
  console.log("weather?", weather);

  const cityName = weather?.name;
  const celsius = weather?.main.temp;
  const fahrenheit = celsius * 1.8 + 32;
  const description = weather?.weather[0].description;

  return (
    <div className="weather-box">
      <h1 style={{ marginBottom: "30px" }}>{cityName}</h1>
      <h2>
        {celsius}°C / {fahrenheit}°F
      </h2>
      <h3>{description}</h3>
    </div>
  );
}

export default WeatherBox;
