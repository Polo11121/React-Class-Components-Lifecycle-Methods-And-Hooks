import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Header.css";

export class HeaderKlasowy extends Component {
  constructor(props) {
    super(props);
    // console.log("Hello from constructor");
    this.state = {
      input: ""
    };
  }

  // componentDidMount = () => console.log("component mounted");

  // shouldComponentUpdate = () => this.search.value.length > 5;

  // componentDidUpdate = () => console.log("component upadted");

  // componentWillUnmount = () => console.log("component unmounted");

  handleInputChange = () => {
    this.setState({
      input: this.search.value
    });
  };

  render() {
    return (
      <header className="header">
        <form className="header__search">
          <SearchIcon />
          <input
            placeholder="Search for..."
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <p>{this.state.input}</p>
        </form>
      </header>
    );
  }
}
