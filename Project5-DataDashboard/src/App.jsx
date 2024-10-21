import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather.jsx';

const App = () => {
  let API_KEY = "c0de5759fcad4756b6c6f92e042d6716";
  let testQuery = `https://api.weatherbit.io/v2.0/current?city=Chicago&units=I&key=${API_KEY}&include=minutely`;
  let dayQuery = `https://api.weatherbit.io/v2.0/history/daily?city=Chicago&units=I&start_date=2024-10-22&end_date=2024-10-22&key=${API_KEY}`;

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
            <h2> {cityInfo.length > 0 ? cityInfo.cityName : "N/A"} </h2>
            <h3> {cityInfo.length > 0 ? cityInfo.cityName : "N/A"}, {cityInfo.length > 0 ? cityInfo.country : "N/A"}, {cityInfo.length > 0 ? cityInfo.state : "N/A"} </h3>
          </div>
          <div className="summaries">
            <h3> Averages for the Current Time Range </h3>
            <div className="summariesCont"> 
              <div className="currSummary">
                <h2> Average Temperature </h2>
                <h3> {fetchResult.length >= 1 ? Math.floor(fetchResult.reduce((acc, day) => acc + (day.temp || 0), 0) / fetchResult.length) + " °F" : "N/A"} </h3>
              </div>
              <div className="currSummary">
                <h2> Average Relative Humidity </h2>
                <h3> {fetchResult.length >= 1 ? Math.floor(fetchResult.reduce((acc, day) => acc + (day.rh || 0), 0) / fetchResult.length) + "%" : "N/A"} </h3>
              </div>
              <div className="currSummary">
                <h2> Average Pressure </h2>
                <h3> {fetchResult.length >= 1 ? Math.floor(fetchResult.reduce((acc, day) => acc + (day.pres || 0), 0) / fetchResult.length) + " mb" : "N/A"} </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mainFunc"> 
          <Weather dates={fetchResult.length >= 1 ? fetchResult.map((data, index) => (<p key={index}>{data.datetime} </p>)).reverse() : "N/A"} 
                   temps={fetchResult.length >= 1 ? fetchResult.map((data, index) => (<p key={index}>{data.temp + " °F"} </p>)).reverse() : "N/A"} 
                   humidities={fetchResult.length >= 1 ? fetchResult.map((data, index) => (<p key={index}>{data.rh + "%"} </p>)).reverse() : "N/A"} 
                   pressures={fetchResult.length >= 1 ? fetchResult.map((data, index) => (<p key={index}>{data.pres + " mb"} </p>)).reverse() : "N/A"}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
