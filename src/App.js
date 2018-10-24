import React, { Component } from 'react';
import Header from "./component/Header/Header";
import Router from "./routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        {Router}
      </div>
    );
  }
}

export default App;
