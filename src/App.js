import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Pages/Nav.js';
import Home from './Pages/Home.js';
import Room from './Pages/Rooms.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/rooms' component={Room} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
