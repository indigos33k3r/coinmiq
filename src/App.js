import React, { Component } from 'react';

import './4.0.0-beta.2_materia_bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SecondApp from './SecondApp';

import { Navbar, Nav, NavItem } from 'reactstrap';
import logo_inverse_small from './images/logo_word_inverse_small.png';

function MyHeader(props) {
  return (
    <Navbar color="dark" dark expand>
      <Link to="/">
        <img src={logo_inverse_small} alt="My logo" />
      </Link>
      <Nav className="mr-auto" navbar>
        <NavItem>
          &nbsp;&nbsp;<Link to="/secondApp">Get Mining Widget</Link>&nbsp;&nbsp;
        </NavItem>
        <NavItem>
          &nbsp;&nbsp;<Link to="/secondApp">Remote Mining</Link>&nbsp;&nbsp;
        </NavItem>
        <NavItem>
          &nbsp;&nbsp;<a
            href="https://www.github.com/joewandy/coinmiq"
            target="_blank"
          >
            Github
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

function MyFooter(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <p>
        <small>Copyright © 2017 Coinmiq</small>
      </p>
    </div>
  );
}

class App extends Component {
  // constructor(props, context) {
  //     super(props, context);
  // }

  render() {
    return (
      <Router>
        <div>
          <MyHeader />
          <Route exact path="/secondApp" component={SecondApp} />
          <Route exact path="/" component={Home} />
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
