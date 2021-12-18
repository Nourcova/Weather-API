import React, { Component } from 'react';

class SingleWeather extends Component {
    render() {
        return (
            <div>
                <div className="weath">
                    <p>{this.props.time}</p>
                    <img src={this.props.source} alt="storm icon" />
                    <p>{this.props.temperature}</p>
                </div>
            </div>
        )
    }
}

export default SingleWeather
