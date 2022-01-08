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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listOfWeather: this.props.fakeWeatherData,
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     listOfWeather: this.props.fakeWeatherData,
  //   })
  //   console.log(this.state.listOfWeather)
  // }


  render() {
    return (

      <div className="container">
        {
          this.props.fakeWeatherData && this.props.fakeWeatherData.map(x => {
            return (
              <SingleWeather time={x.dt_txt.split(' ')[1]} source={x.weather[0].main} temperature={x.main.temp} />
            )
          })}
      </div>
    )
  }
}

export default WeatherList
