import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WeatherAppContextWrapper } from './state/WeatherAppContext';

ReactDOM.render(
  <WeatherAppContextWrapper>
    <App />
  </WeatherAppContextWrapper>,
  document.getElementById('root')
);
