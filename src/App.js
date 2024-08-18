import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

const API_KEY = "6326320fe2a01d7c63da5a41c2f13ceb";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("오류가 발생했습니다:", error.message); // 오류 메시지 출력
      setWeather("error");
    }
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("오류가 발생했습니다:", error.message); // 오류 메시지 출력
      setWeather("error");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      console.log("현재날씨.");
      getCurrentLocation();
    } else {
      console.log("지역날씨");
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <div className="btn-area">
            <WeatherButton cities={cities} setCity={setCity} city={city} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
