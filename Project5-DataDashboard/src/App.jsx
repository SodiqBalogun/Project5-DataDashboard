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
    setCityInfo(cityInfo.cityName=info.city_name, cityInfo.country=info.country_code, cityInfo.state=info.state_code);
  }

  useEffect (() => {
    getInfo1();
  },[]);

  return (
    <div className="App"> 
      <h1> Weather App </h1>
      <div class="cityInfo">
        <p> This joint is working </p>
        <p> {cityInfo.cityName} </p>
      </div>
      <div class="currSummary">
        
      </div>
      <h1> This is Sodiq! </h1>
      <p> {fetchResult.temp} </p>
      <Weather></Weather>
    </div>
  )
}

export default App
