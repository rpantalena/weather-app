import React from "react";
import './index.css';
import GetCoordinates from "../GetCoordinates";
import axios from 'axios'
import Card from "@material-ui/core/Card";



const { useState } = React;

function GetWeather() {
  const [errorState, setErrorState]:any = useState({errorCode:0,errorMessage:""})
  const [weatherData, setWeatherData]:any = useState();
  const [zipCode,setZipCode] = useState("");
  const [zipCodeSelection,setZipCodeSelection] = useState("");

  function handleSubmit(event:any) {
    event.preventDefault();
    setErrorState({errorCode:0,errorMessage:""})
    getWeatherData();
  } 

  function handleChange(event:any){
    setZipCode(event.target.value)
  }

  async function getWeatherData():Promise<any> {
    const apiKey = '58570c6270ae1a9b2a9ae82d060b2d5a'
    const getData = async () => {
      const response = await GetCoordinates(zipCode);
      if(response !== null){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.lat}&lon=${response.lon}&appid=${apiKey}&units=imperial`)
        .then(response =>{
            setZipCodeSelection(zipCode);
            setWeatherData(response.data)
          },error => {
          console.log(error);
          setErrorState({errorCode:-1,errorMessage:"There was an error finding the data for your zip code"})
        })
      }else{
        setErrorState({errorCode:-1,errorMessage:"There was an error with the zip code input"})
      }
    }
    getData();
  }
 

  return(
    <div>
      <Card className = "form-card" style={{width:"300px",backgroundColor: "lightgrey"}}>
        <form style={{width:"auto"}} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="zipCodeInput">
              <b>Zip Code</b>
            </label>
            <input type="text" className="form-control" placeholder="Zip Code" onChange={handleChange} />
          </div>
        </form>
      </Card>
      <Card className = "weather-data-card" style={{width:"fit-content",backgroundColor: "lightgrey"}}>
        {errorState.errorCode === -1 &&<div className="error-message">{errorState.errorMessage}</div>}
        {errorState.errorCode !== -1 && weatherData &&
          <div className="weather-data">
            <div>Showing weather for {weatherData.name}, zip code: {zipCodeSelection}</div>
            <div>
              <div>Weather for the day: {weatherData.weather[0].main}</div>
              <div> - {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</div>
            </div>
            <div>
              <div>Temperature Information:</div>
              <div> - Current temp: {weatherData.main.temp}F</div>
              <div> - High of {Math.round(weatherData.main.temp_max)}F, with a low of {Math.round(weatherData.main.temp_min)}F</div>
              <div> - Humidity is {weatherData.main.humidity}% with winds of {weatherData.wind.speed}mph</div>
              <div> - Temperature will feel like {weatherData.main.feels_like}</div>
            </div>
          </div>}
        </Card>
    </div>
      
    )
};

export default GetWeather;