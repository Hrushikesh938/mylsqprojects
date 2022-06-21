import React from "react";

export const ForcastWeather = (props) => {
  return (
    <div>
      <div className="navbar">
        <i><strong>Weather</strong>Accurate</i>
      </div>
      <div>
       <p>5 Day Forecast for {props.city}</p>
       
      </div>
    </div>
  );
};