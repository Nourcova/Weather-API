import React from "react";

import clear from "../img/weather-icons/clear.svg";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {

    return (
      <header>
        <form>
          <div className="input">
            <input id="search" type="search" name="search" placeholder="Search City" /></div>
          <input type="button" onClick={()=>{
            this.props.getValue(document.getElementById("search").value);
            console.log(document.getElementById("search").value)
            }} value="find weather"></input>
        </form>
      </header>
    );
  }
}
export default Search;
