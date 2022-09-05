import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      coffees: [
        {
          name: "Black coffee",
          id: "jsd8fuj3lkjf3j",
        },
        {
          name: "Latte",
          id: "j3qhh23jdj9jfww",
        },
        {
          name: "Cappuccino",
          id: "dlkjs90dfs9df9sd",
        },
        {
          name: "Americano",
          id: "h3uhu3jhuas898sdf",
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.coffees.map((coffee) => {
            return <div key={coffee.id}>
            <h1>{coffee.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
