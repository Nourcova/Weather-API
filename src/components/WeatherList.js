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

    

    const checkWeather = (param) =>{
      let ibrahim = '';
        switch (this.props.fakeWeatherData[param].weather[0].main) {
          case 'Clear':
            ibrahim = clear;
            break;
          case 'Clouds':
            ibrahim = cloudy;
            break;
          case 'Rain':
            ibrahim = rain;
            break;
        }
        return ibrahim
    }

    let listOfWeather=this.props.fakeWeatherData;

    return (

      <div className="container">

        {
        listOfWeather.map(x=>{

          return(
          <SingleWeather time={x.dt_txt.split(' ')[1]} source={()=>checkWeather(x.weather[0].main)} temperature={x.main.temp_kf}/>
          )
          
        })}
        {console.log(`${checkWeather(0)}`)}
      </div>
    )
  }
}

export default WeatherList
