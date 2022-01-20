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
      const checkWeather = () => {
        let status = '';
        switch (true) {
          case (this.props.source <= 300):
            status = storm;
            return status;
            break;
          case (this.props.source > 300 && this.props.source <= 499):
            status = drizzle;
            return status;

            break;
          case (this.props.source >= 500 && this.props.source <= 599):
            status = rain;
            return status;

            break;
          case (this.props.source >= 600 && this.props.source <= 699):
            status = snow;
            return status;

            break;
          case (this.props.source >= 700 && this.props.source <= 799):
            status = fog;
            return status;

            break;
          case (this.props.source == 800):
            status = clear;
            return status;

            break;
          case (this.props.source == 801):
            status = partlycloudy;
            return status;

            break;
          case (this.props.source >= 802 && this.props.source <= 805):
            status = mostlycloudy;
            return status;

            break;
        }
      }
        return (
           
            <div>
                <div className="weath">
                    <p>{this.props.time}</p>
                    <img src={checkWeather()} alt="icon" />              
                    <p>{this.props.temperature}°C</p>
                </div>
            </div>
        )
    }
}

export default SingleWeather
