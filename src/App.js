import React, { Component } from 'react';

import './united.bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import WhyNimiq from './WhyNimiq';
import GetMiner from './GetMiner';
import PowLink from './PowLink';
import PowMine from './PowMine';

import { Navbar, Nav, NavItem } from 'reactstrap';
import logo_inverse_small from './images/color_logo_transparent@2x_small.png';

function MyHeader(props) {
  return (
    <Navbar color="dark" dark expand>
      <Link to="/">
        <img src={logo_inverse_small} alt="My logo" />
      </Link>
      <Nav className="mr-auto" navbar>
        <NavItem>
          &nbsp;&nbsp;&nbsp;<Link to="/getMiner">Get Miner</Link>&nbsp;&nbsp;&nbsp;
        </NavItem>
        <NavItem>
          &nbsp;&nbsp;&nbsp;<Link to="/createPowlink">Powlinks</Link>&nbsp;&nbsp;&nbsp;
        </NavItem>
        <NavItem>
          &nbsp;&nbsp;&nbsp;<a
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
        <small>Copyright © 2017 Coinmiq.com</small>
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
          <Route exact path="/" component={Home} />
          <Route exact path="/whyNimiq" component={WhyNimiq} />
          <Route exact path="/getMiner" component={GetMiner} />
          <Route exact path="/createPowlink" component={PowLink} />
          <Route exact path="/mine/:to" component={PowMine} />
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
