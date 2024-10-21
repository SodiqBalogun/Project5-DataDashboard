import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather.jsx';

const App = () => {
  let API_KEY = "c0de5759fcad4756b6c6f92e042d6716";
  let testQuery = `https://api.weatherbit.io/v2.0/current?city=Chicago&units=I&key=${API_KEY}&include=minutely`;
  let dayQuery = `https://api.weatherbit.io/v2.0/history/daily?city=Chicago&units=I&start_date=2024-10-1&end_date=2024-10-20&key=${API_KEY}`;

  const [fetchResult, setFetchResult] = useState([]);
  // const [revFetchResult, setRevFetchResult] = useState([]);
  const [cityInfo, setCityInfo] = useState({cityName:"", country:"", state:""});

  const getInfo1 = async () => {
    const response = await fetch(dayQuery);
    const info = await response.json();
    console.log(info.data);
    setFetchResult(info.data);
    // setRevFetchResult(info.data);
    // console.log(revFetchResult);
    setCityInfo({cityName:info.city_name, country:info.country_code, state:info.state_code});
  }

  useEffect (() => {
    getInfo1();
  },[]);

  return (
    <div className="App"> 
      <div className="sideNav">
        <h2> Weather App </h2>
      </div>
      <div className="rest">
        <div className="topBar">
          <div className="cityInfo">
            <h2> {cityInfo.cityName} </h2>
            <h3> {cityInfo.cityName}, {cityInfo.country}, {cityInfo.state} </h3>
          </div>
          <div className="summaries">
            <div className="currSummary">
              <h2> Average Temperature </h2>
              <p> (For current Period) </p>
            </div>
            <div className="currSummary">
              <h2> Average Relative Humidity </h2>
              <p> (For current Period) </p>
            </div>
            <div className="currSummary">
              <h2> Average Pressure </h2>
              <p> (For current Period) </p>
            </div>
          </div>
        </div>
        <div className="mainFunc"> 
          <p> {fetchResult.temp} </p>
          <Weather dates={fetchResult.map((data, index) => (<p key={index}>{data.datetime}</p>)).reverse()} 
                   temps={fetchResult.map((data, index) => (<p key={index}>{data.temp} °F</p>)).reverse()} 
                   humidities={fetchResult.map((data, index) => (<p key={index}>{data.rh}%</p>)).reverse()} 
                   pressures={fetchResult.map((data, index) => (<p key={index}>{data.pres} mb</p>)).reverse()}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
