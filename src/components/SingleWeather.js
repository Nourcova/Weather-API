import React, { Component } from 'react';
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";

class SingleWeather extends Component {
    render() {
        const checkWeather = () =>{
            let status = '';
              switch (this.props.source) {
                case 'Clear':
                  status = clear;
                  break;
                case 'Clouds':
                  status = cloudy;
                  break;
                case 'Rain':
                  status = rain;
                  break;
              }
            
              return status
          }
        return (
           
            <div>
                <div className="weath">
                    <p>{this.props.time}</p>
                    <img src={checkWeather()} alt="storm icon" />              
                    <p>{this.props.temperature}</p>
                </div>
            </div>
        )
    }
}

export default SingleWeather
