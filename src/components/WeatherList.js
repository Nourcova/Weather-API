import React, { Component } from 'react'
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import SingleWeather from './SingleWeather';

class WeatherList extends Component {

    render() {
      let hour=[ "" ];
        return (
            <div className="container">
            <SingleWeather hour="333" source={clear} temperature="7777"/>
            <SingleWeather/>
            <SingleWeather/>
            <SingleWeather/>
            <SingleWeather/>
            <SingleWeather/>
            <SingleWeather/>
          </div>
        )
    }
}

export default WeatherList
