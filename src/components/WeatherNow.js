import React, { Component } from 'react'
/*import PropTypes from 'prop-types'*/
import storm from "../img/weather-icons/storm.svg"
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";

export class WeatherNow extends Component {
    static propTypes = {

    }

    render() {
        let ibrahim = '';
        switch (this.props.source) {
          case 'Cleare':
            ibrahim = clear;
            break;
          case 'Clouds':
            ibrahim = cloudy;
            break;
          case 'Rain':
            ibrahim = rain;
            break;
        }
        return (
            
                <div className="img1"><img src={ibrahim} alt="storm icon" />
                    <p className="oc">overcast cloud</p>
                    <p className="temperature"><span>Temperature &nbsp;</span> {this.props.from} <span> &nbsp;to </span> &nbsp; {this.props.to} </p>
                    <p className="temperature"><span>Humidity &nbsp;</span> {this.props.humudity}&nbsp;<span >  Pressure  </span> &nbsp;{this.props.pressure}</p>
                </div>
            )
    }
}

export default WeatherNow
