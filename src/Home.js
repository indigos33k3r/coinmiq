import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import CoinmiqMiner from 'react-coinmiq-miner';
import About from './About.js';
import GetMiner from './GetMiner.js';

import logo_inverse_small from './images/coinmiq1.svg';

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

  newWallet = value => {
    window.open('https://nimiq-testnet.com', '_blank');
  };

  checkBalance = value => {
    window.open(
      'https://nimiq.watch/#' + this.state.wallet.split(' ').join('+'),
      '_blank'
    );
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
    const form = (
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
          <Button color="info" size="sm" onClick={this.loadExample}>
            Example wallet
          </Button>
          &nbsp;
          <Button color="info" size="sm" onClick={this.newWallet}>
            New wallet
          </Button>
        </FormGroup>
        <Button color="primary" size="lg" block>
          Start Mining!
        </Button>
      </Form>
    );

    const wallet = this.state.wallet;
    const askToMine = this.state.doMining ? (
      <div>
        <CoinmiqMiner
          address={wallet}
          width="auto"
          height="auto"
          autoStart={true}
          displayMode="compact"
          border={true}
        />
        <Button color="info" size="sm" onClick={this.checkBalance}>
          Check balance
        </Button>
      </div>
    ) : (
      <div>
        <hr className="my-2" />
        <p>
          <strong>Try it now.</strong>
        </p>
        <p>Enter a wallet address below to mine.</p>
        <p className="lead">{form}</p>
      </div>
    );

    const jumbotron = (
      <div>
        <Jumbotron>
          <img
            className="LogoCenter img-fluid"
            src={logo_inverse_small}
            alt="My logo"
            width="60%"
          />
          <h3>Browser mining made easy.</h3>
          <p className="lead">
            We provide a JavaScript miner that you can embed into your site.
            There is nothing to install. Your users loads a page containing our
            miner from their browser, and they mine for an ad-free experience or
            in exchange of contents on your site.
          </p>
          <p>
            <strong>What is cryptocurrency mining?</strong>
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
          {askToMine}
        </Jumbotron>
      </div>
    );

    return (
      <div>
        <div className="Aligner">
          <div className="Aligner-item--fixed">
            {jumbotron}
            <About />
            <GetMiner />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
