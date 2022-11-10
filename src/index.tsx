import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import GetWeather from './components/GetWeather';


render(<div>
    <App/>
    <GetWeather/>
  </div>
, document.getElementById("root"));
