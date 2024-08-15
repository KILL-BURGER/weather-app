import React from "react";

const WeatherBox = ({ weather }) => {
  // console.log("weather?", weather);
  let returnHTML;
  if (weather === "error") {
    returnHTML = <h1>날씨 불러오기 실패..!</h1>;
  } else {
    const cityName = weather?.name;
    // 화씨, 섭씨 모두 소수 2번째 자리까지 반올림
    const celsius = Math.round(weather?.main.temp * 100) / 100;
    const fahrenheit = Math.round((celsius * 1.8 + 32) * 100) / 100;
    const description = weather?.weather[0].description;
    returnHTML = (
      <div className="weather-box">
        <h1 style={{ marginBottom: "30px" }}>{cityName}</h1>
        <h2>
          {celsius}°C / {fahrenheit}°F
        </h2>
        <h3>{description}</h3>
      </div>
    );
  }

  return returnHTML;
};

export default WeatherBox;
