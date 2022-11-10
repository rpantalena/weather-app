import React from "react";
import './index.css';
import axios from 'axios'



async function GetCoordinates(zipCode:string):Promise<any> {

  const apiKey = '58570c6270ae1a9b2a9ae82d060b2d5a'

  return axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`)
    .then(response => {
        return response.data;
      },(error:any) => {
        console.log(error);
        return null;
    });
  }

export default GetCoordinates;