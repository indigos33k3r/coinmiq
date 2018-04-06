import React, { Component } from 'react';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron
} from 'reactstrap';
import CoinmiqMiner from 'react-coinmiq-miner';
import About from './About.js';
import GetMiner from './GetMiner.js';

import logo_inverse_small from './images/main-mascot.92509dbd.png';

import './css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      wallet: '',
      doMining: false
    };
    this.loadExample = this.loadExample.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadExample = value => {
    this.setState({
      wallet: 'NQ32 VGUP 1GQM J8YL 1QNS RYU8 CUUB XG35 A1Q7'
    });
  };

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.wallet === '') {
      alert('Wallet address is required');
    } else {
      this.setState({ doMining: true });
    }
  }

  render() {
    let form = (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Wallet Address</Label>
          <Input
            type="wallet"
            name="wallet"
            id="wallet"
            placeholder="e.g. NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
            value={this.state.wallet}
            onChange={this.handleInputChange}
            size="100"
          />
          <Button color="primary" size="sm" onClick={this.loadExample}>
            example address
          </Button>
          &nbsp;<small>
            <a
              href="https://nimiq-testnet.com"
              target="_blank"
              className="float-right"
            >
              create a new wallet
            </a>
          </small>&nbsp;
          <br />
          <br />
          <FormText color="white">
            Your mining reward will be sent to the{' '}
            <a href="http://www.nimiq.com">Nimiq</a> wallet address specified
            above.{' '}
          </FormText>
        </FormGroup>
        <Button color="warning" size="lg">
          Mine
        </Button>
      </Form>
    );

    let title = (
      <div>
        <Jumbotron>
          <img
            className="LogoCenter img-fluid"
            src={logo_inverse_small}
            alt="My logo"
          />
          <h3>Browser mining made easy.</h3>
          <p className="lead">
            We provide a JavaScript miner that you can embed into your site.
            There is nothing to install. Your users loads a page containing our
            miner from their browser, and they mine for an ad-free experience or
            in exchange of contents on your site.
          </p>
          <p>
            <strong>Cryptocurrency Mining</strong>
          </p>
          <p>
            A cryptocurrency is a digital or virtual currency that uses
            cryptography for security. Values in cryptocurrency is produced
            through consensus of participants in the network. In cryptocurrency
            networks, mining is the generation of cryptocurrency coins, as a
            reward for validating transactions. By participating in mining, you
            help to secure consensus and contribute to the strength of the
            network. In return, you receive mining rewards.
          </p>

          <hr className="my-2" />
          <p>
            Try it yourself below by entering a wallet address to mine to
            (alternatively you can also create a new wallet by clicking the link
            below.
          </p>
          <p className="lead">{form}</p>
        </Jumbotron>
      </div>
    );

    if (this.state.doMining) {
      let wallet = this.state.wallet;
      let encodedWallet = 'https://nimiq.watch/#' + wallet.split(' ').join('+');
      window.scrollTo(0, 0);
      return (
        <div>
          <div className="Aligner">
            <div className="Aligner-item--fixed">
              <CoinmiqMiner
                address={wallet}
                width="auto"
                height="auto"
                autoStart={true}
                displayMode="full"
                border={false}
              />
            </div>
          </div>
          <div className="Aligner">
            <div className="Aligner-item--fixed2">
              <a href={encodedWallet} target="_blank">
                Check Balance
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Aligner">
          <div className="Aligner-item--fixed">
            {title}
            <About />
            <GetMiner />
          </div>
        </div>
      );
    }
  }
}

export default Home;
