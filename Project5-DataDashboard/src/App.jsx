import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather.jsx';

const App = () => {
  let API_KEY = "c0de5759fcad4756b6c6f92e042d6716";
  let testQuery = `https://api.weatherbit.io/v2.0/current?city=Chicago&units=I&key=${API_KEY}&include=minutely`;
  let fetchResult = "This is the starting value!";

  const getInfo1 = async () => {
    const response = await fetch(testQuery);
    const info = await response.json();
    console.log(info);
    console.log(info.data[0].city_name);
    fetchResult = info.data[0].city_name;
  }

  useEffect (() => {
    getInfo1();
  },[]);

  return (
    <div className="App"> 
      <h1> This is Sodiq! </h1>
      <p> {fetchResult} </p>
      <Weather></Weather>
    </div>
  )
}

export default App
