import React, { Component } from 'react';

//import './css/materia.bootstrap.min.css';
import './css/united.bootstrap.min.css';
//import './css/nimiq-style/nimiq-style.css';
import './css/App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import PoweredBy from './PoweredBy';
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

  reloadPage = value => {
    window.location.reload();
  };

  render() {
    return (
      <Navbar color="light" light expand>
        <Link to="/">
          <img
            src={logo_inverse_small}
            alt="My logo"
            onClick={this.reloadPage}
          />
        </Link>
        <Nav pills>
          <NavItem>
            <NavLink tag={Link} to="/coin">
              [Coin]
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              [More]
            </DropdownToggle>
            <DropdownMenu>
              <div>
                <Link className="dropdown" to="/createPowlink">
                  Powlinks
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
                <a className="dropdown" href="https://nimiq.com/">
                  Nimiq Website
                </a>
              </div>
              <div>
                <a className="dropdown" href="https://nimiq.watch/">
                  Nimiq Watch
                </a>
              </div>
              <div>
                <a className="dropdown" href="https://nimiq.mopsus.com/">
                  Nimiq Mopsus
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
          <Route exact path="/coin" component={PoweredBy} />
          <Route exact path="/createPowlink" component={PowLink} />
          <Route exact path="/mine/:to" component={PowMine} />
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
