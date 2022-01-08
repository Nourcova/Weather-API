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
        return (
            
                <div className="img1"><img src={status} alt="storm icon" />
                <h1>{this.props.friko}</h1>
                    <p className="oc">{this.props.description}</p>
                    <p className="temperature"><span>Temperature  &nbsp;</span> {this.props.min_temperature} <span> &nbsp;to </span> &nbsp; {this.props.max_temperature} </p>
                    <p className="temperature"><span>Humidity &nbsp;</span> {this.props.humudity}&nbsp;<span >  Pressure  </span> &nbsp;{this.props.pressure}</p>
                </div>
            )
    }
}

export default WeatherNow
