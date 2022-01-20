import React from "react";

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {

    return (
      <header>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.getValue(document.getElementById("search").value);
          console.log(document.getElementById("search").value);
          }}>
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
