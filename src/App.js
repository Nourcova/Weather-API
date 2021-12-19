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

    };
  }

  render() {
    console.log(fakeWeatherData.list[4].weather[0].main);
 
    return (

      <div className="app">

        <Search />
        <div className="main">
          <WeatherNow source={fakeWeatherData.list[4].weather[0].main} from="10℃" to="11℃" humudity="78%" pressure="1008.8" />
          <WeatherList fakeWeatherData={fakeWeatherData.list} />
        </div>
      </div>

    );
  }
}

export default App;
