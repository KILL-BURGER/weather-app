import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, city }) => {
  return (
    <div>
      <Button
        variant={`${city === "" ? "dark" : "warning"}`}
        style={{ margin: "0 5px" }}
        onClick={() => setCity("")}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant={`${city === item ? "dark" : "warning"}`}
          key={index}
          style={{ margin: "0 5px" }}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
