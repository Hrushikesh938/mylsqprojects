import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { DateBuilder } from './/DateBuilder';

//Function to display the data using the passed state data from parent function
export const DisplayWeather = (props) => {
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>{props.weather[0].main && (
      <div className="main-box">
        {/*Div block to display Location and date */}
        <div className="location-box">
          <h1 className="heading">Today</h1><br></br>
          <div className="location"> {Capitalize(props.city)}</div>
          <div className="date">{DateBuilder(new Date())}</div>
          <br/>
          <Link to='/forecast' params={{weather:props.weather[0],city:props.city}}>VIEW 5 DAY FORCAST </Link>
        </div>
        {/*Div block to display Min/Max temperature and Weather icon with description of weather*/}
        <div className="weather-box">
          <p className="temp1"> Day {Math.round(props.weather[0].temp_max)}<sup>&deg;c</sup> / Night {Math.round(props.weather[0].temp_min)}<sup>&deg;c</sup></p>
          <div className="weather">
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt="wthr img" />
            <p><super>{props.weather[0].weather_desc}</super></p>
          </div>
          {/*Div block to display Current temperature and other weather conditions */}
          <div className="temp">
            <p>Temperature : {Math.round(props.weather[0].temp)}
              <sup>&deg;c</sup></p>
            <p>Wind : {props.weather[0].wind} kmph</p>
            <p>Humidity : {props.weather[0].humidity} %</p>
            <p>Visibility : {Math.round(props.weather[0].visibility) / 1000} km</p>
          </div>
        </div>
      </div>
    )}</>
  );
}