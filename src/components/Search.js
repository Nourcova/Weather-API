import React from "react";

import clear from "../img/weather-icons/clear.svg";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      /*<div>
        {this.state.input}
        <input
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          Say Hello
        </button>
      </div>*/
      <header>
          <div className="input">
            <input type="search" name="search" placeholder="Search City" /></div>
          <div><button>find weather</button></div>
        </header>
    );
  }
}
export default Search;
