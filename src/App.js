import React, { Component } from 'react';
import CarsHeader from "./components/cars-header";
import wrench from "./images/wrench-cross.png"
import Home from "./pages/home/home";
import Volunteer from "./pages/volunteer/volunteer";

import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/login/login';
import Schedule from './pages/schedule/schedule';

class App extends Component {
  clicked(){
    console.log('you clicked it')
  }
  render() {
    return (
      <Router>
        <div>
          <CarsHeader image={wrench}></CarsHeader>
          <Route path="/" exact component={Home} />
          <Route path="/volunteer" exact component={Volunteer} />
          <Route path="/login"  component={Login} />
          <Route path="/schedule" component={Schedule} />


        </div>
      </Router>
    );
  }
}

export default App;
