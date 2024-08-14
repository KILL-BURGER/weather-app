import React from "react";
import { Button } from "react-bootstrap";

function WeatherButton() {
  return (
    <div>
      <Button variant="warning" style={{ margin: "0 5px" }}>
        Current Location
      </Button>
      <Button variant="warning" style={{ margin: "0 5px" }}>
        Paris
      </Button>
      <Button variant="warning" style={{ margin: "0 5px" }}>
        New York
      </Button>
    </div>
  );
}

export default WeatherButton;
