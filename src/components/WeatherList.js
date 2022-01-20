import React, { Component } from 'react'
import SingleWeather from './SingleWeather';

class WeatherList extends Component {

  render() {
    return (

      <div className="container">
        {
          this.props.fakeWeatherData && this.props.fakeWeatherData.map((x,index) => {
            return (
              <SingleWeather key={index} time={x.dt_txt.split(' ')[1].substring(0,5)} source={x.weather[0].id} temperature={x.main.temp} />
            )
          })}
      </div>
    )
  }
}

export default WeatherList
