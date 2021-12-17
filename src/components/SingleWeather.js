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

export class SingleWeather extends Component {
    render() {
        return (
            <div className="weath">
                <p>{this.props.hour}</p>
                <img src={this.props.source} alt="storm icon" />
                <p>{this.props.temperature}</p>
            </div>
        )
    }
}

export default SingleWeather
