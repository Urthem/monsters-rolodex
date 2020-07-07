import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this); // use ES6 arrow function!
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monsters: json }))
      .catch((error) => console.log("Error!"));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(filteredMonsters);

    return (
      //jsx inside ()
      <div className="App">
        <h1>Meow-Dex / Your Meowjesty</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
