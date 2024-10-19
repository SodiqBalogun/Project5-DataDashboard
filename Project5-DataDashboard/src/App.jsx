import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather.jsx';

const App = () => {
  let API_KEY = "c0de5759fcad4756b6c6f92e042d6716";
  let testQuery = `https://api.weatherbit.io/v2.0/current?city=Chicago&units=I&key=${API_KEY}&include=minutely`;
  let dayQuery = `https://api.weatherbit.io/v2.0/history/daily?city=Chicago&units=I&start_date=2024-10-15&end_date=2024-10-20&key=${API_KEY}`;

  const [fetchResult, setFetchResult] = useState("This is the starting value!");
  const [cityInfo, setCityInfo] = useState({cityName:"", country:"", state:""});

  const getInfo1 = async () => {
    const response = await fetch(dayQuery);
    const info = await response.json();
    console.log(info);
    console.log(info.city_name);
    setFetchResult(info.data[0]);
    setCityInfo({cityName:info.city_name, country:info.country_code, state:info.state_code});
  }

  useEffect (() => {
    getInfo1();
  },[]);

  return (
    <div className="App"> 
      <div class="sideNav">
        <h2> Weather App </h2>
      </div>
      <div class="rest">
        <div class="topBar">
          <div class="cityInfo">
            <h2> {cityInfo.cityName} </h2>
            <h3> {cityInfo.cityName}, {cityInfo.country}, {cityInfo.state} </h3>
          </div>
          <div class="currSummary">
            <h2> Average Weather </h2>
            <p> (For current Day) </p>
          </div>
        </div>
        <div class="mainFunc"> 
          <h1> This is Sodiq! </h1>
          <p> {fetchResult.temp} </p>
          <Weather></Weather>
        </div>
      </div>
    </div>
  )
}

export default App;
