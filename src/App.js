import React, { Component } from "react";

//Components
import WeatherList from "./components/WeatherList";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";

//Style
import "./App.css";

//Json 
import fakeWeatherData from "./fakeWeatherData.json";

//Images
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city:"",
    source:"",
    humidity:0,
    temperatur:"",
    min_temperature:"",
    max_temperatue:"",
    description:"",
    pressure:""
    };
   
  
  }
  fetchWeather = () => {
    let key='ab59383c1894d3221a9b9785e7c9731a';
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${key}`;
    
    fetch(url) 
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({
        city:data.city.name,
        humidity:data.list[0].main.humidity,
        pressure: data.list[0].main.pressure,
        min_temperature: data.list[0].main.temp_min,
        max_temperature:data.list[0].main.temp_max,
        description:data.list[0].weather[0].description,
        source:data.list[0].weather[0].main,
  
      })
     return data;
    })
  }
componentDidMount(){
 this.fetchWeather()
} 

  render() {
    return (

      <div className="app">
        <Search />
        <div className="main">
          <WeatherNow source={this.state.source} min_temperature={this.state.min_temperature} max_temperature={this.state.max_temperature} humudity={this.state.humidity} pressure={this.state.pressure} description={this.state.description} />
          <WeatherList fakeWeatherData={this.fetchWeather()}/>
        </div>
      </div>

    );
  }
}

export default App;
