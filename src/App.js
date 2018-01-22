import React, { Component } from 'react';

import './united.bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GetMiner from './GetMiner';
import PowLink from './PowLink';
import PowMine from './PowMine';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import logo_inverse_small from './images/color_logo_transparent@2x_small.png';

class MyHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand>
        <Link to="/">
          <img src={logo_inverse_small} alt="My logo" />
        </Link>
        <Nav pills>
          <NavItem>
            <NavLink>
              <Link to="/getMiner">[Get Miner]</Link>
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              [More]
            </DropdownToggle>
            <DropdownMenu>
              <div>
                <Link className="dropdown" to="/about">
                  About
                </Link>
              </div>
              <div>
                <a
                  className="dropdown"
                  href="https://www.github.com/joewandy/coinmiq"
                >
                  Github
                </a>
              </div>
              <DropdownItem divider />
              <div>
                <Link className="dropdown" to="/createPowlink">
                  Powlinks
                </Link>
              </div>
              <div>
                <a className="dropdown" href="https://nimiq.watch/">
                  Block Explorer
                </a>
              </div>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
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
        <small>Copyright © 2018 — Coinmiq.com</small>
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
        <div className="App">
          <MyHeader />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
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
