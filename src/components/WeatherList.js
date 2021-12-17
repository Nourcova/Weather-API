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
    return (
      <div className="container">

        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />
        <SingleWeather time="3:00" source={mostlycloudy} temperature="9 ℃" />

      </div>
      /* <div className="weath">
        <p>3:00</p>
        <img src={mostlycloudy} alt="storm icon" />
        <p>8 ℃</p>
      </div>
      <div className="weath">
        <p>6:00</p>
        <img src={mostlycloudy} alt="storm icon" />
        <p>9 ℃</p>
      </div>
      <div className="weath">
        <p>9:00</p>
        <img src={clear} alt="storm icon" />
        <p>14 ℃</p>
      </div>
      <div className="weath">
        <p>12:00</p>
        <img src={clear} alt="storm icon" />
        <p>17 ℃</p>
      </div>
      <div className="weath">
        <p>15:00</p>
        <img src={clear} alt="storm icon" />
        <p>18 ℃</p>
      </div>
      <div className="weath">
        <p>18:00</p>
        <img src={clear} alt="storm icon" />
        <p>16 ℃</p>
      </div>
      <div className="weath">
        <p>21:00</p>
        <img src={mostlycloudy} alt="storm icon" />
        <p>13 ℃</p>
      </div> */

    )
  }
}

export default WeatherList
