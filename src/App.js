import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Dashboard></Dashboard>
        <Wizard></Wizard>
      </div>
    );
  }
}

export default App;
