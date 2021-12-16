import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
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
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <div className="input">
            <input type="search" name="search" placeholder="Search City" /></div>
          <div><button>find weather</button></div>
        </header>

        <div className="main">
          <div className="img1"><img src={mostlycloudy} alt="storm icon" />
            <p>overcast cloud</p>
            <p>temperature 10<span> ℃ </span> to 11 <span> ℃</span></p>
            <p><span>humidity</span><span> 78% </span><span> pressure </span><span> 1008.8 </span></p>
            </div>
          <div className="container">
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
            <div className="weath">
              <p>3:00</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>8</p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
