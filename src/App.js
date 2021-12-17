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
          <div className="img1"><img src={'https://placekitten.com/200/300'} alt="storm icon" />
            <p className="oc">overcast cloud</p>
            <p className="temperature"><span>Temperature</span> 10℃ to 11℃</p>
            <p className="temperature"><span>Humidity &nbsp;</span> 78% &nbsp;<span >  Pressure  </span> &nbsp; 1008.8</p>
            
            </div>
          <div className="container">
            <div className="weath">
              <p>3:00</p>
              <img src={"https://placekitten.com/200/300"} alt="storm icon" />
              <p>8 ℃</p>
            </div>
            <div className="weath">
              <p>6:00</p>
              <img src={"https://placekitten.com/200/300"} alt="storm icon" />
              <p>9 ℃</p>
            </div>
            <div className="weath">
              <p>9:00</p>
              <img src={"https://placekitten.com/200/138"} alt="storm icon" />
              <p>14 ℃</p>
            </div>
            <div className="weath">
              <p>12:00</p>
              <img src={"https://placekitten.com/200/300"} alt="storm icon" />
              <p>17 ℃</p>
            </div>
            <div className="weath">
              <p>15:00</p>
              <img src={"https://placekitten.com/200/286"} alt="storm icon" />
              <p>18 ℃</p>
            </div>
            <div className="weath">
              <p>18:00</p>
              <img src={"https://placekitten.com/200/286"} alt="storm icon" />
              <p>16 ℃</p>
            </div>
            <div className="weath">
              <p>21:00</p>
              <img src={"https://placekitten.com/200/286"} alt="storm icon" />
              <p>13 ℃</p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
