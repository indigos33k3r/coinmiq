import React, { Component } from 'react';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import HorizontalCustomLabels from './HorizontalCustomLabels';
import CoinmiqMiner from 'react-coinmiq-miner';

import logo_inverse_small from './images/color_logo_transparent@2x.png';

import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      wallet: '',
      hashes: 250,
      doMining: false
    };
    this.loadExample = this.loadExample.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHashesChange = this.handleHashesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadExample = value => {
    this.setState({
      wallet: 'NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM'
    });
  };

  handleHashesChange = value => {
    this.setState({
      hashes: value
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

  handleHashesChange = value => {
    this.setState({
      hashes: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.wallet === '') {
      alert('Wallet address is required');
    } else {
      this.setState({ doMining: true });
    }
  }

  render() {
    let title = (
      <div>
        <h4>
          Browser mining made easy{' '}
          <Button
            outline
            color="primary"
            size="sm"
            id="Popover1"
            onClick={this.toggle}
          >
            help
          </Button>
        </h4>
        <br />
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>Help!</PopoverHeader>
          <PopoverBody>
            <p className="text-primary">
              <strong>Cryptocurrency</strong>
            </p>
            <p>
              A cryptocurrency is a digital or virtual currency that uses
              cryptography for security. Values in cryptocurrency is produced
              through consensus of participants in the network.
            </p>
            <p className="text-primary">
              <strong>Mining</strong>
            </p>
            <p>
              In cryptocurrency networks, mining is the generation of
              cryptocurrency coins, as a reward for validating transactions. By
              participating in mining, you help to secure consensus and
              contribute to the strength of the network. In return, you receive
              mining rewards.
            </p>
          </PopoverBody>
        </Popover>
      </div>
    );

    let form = (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">
            Wallet Address{' '}
            <small>
              <a href="#" onClick={this.loadExample}>
                (load example)
              </a>
            </small>
          </Label>
          <Input
            type="wallet"
            name="wallet"
            id="wallet"
            placeholder="e.g. NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
            value={this.state.wallet}
            onChange={this.handleInputChange}
            size="100"
          />
          <FormText color="muted">
            Your mining reward will be sent to the{' '}
            <a href="http://www.nimiq.com">Nimiq</a> wallet address specified
            above.{' '}
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label>Target Hashes</Label>
          <HorizontalCustomLabels
            value={this.state.hashes}
            onInputChange={this.handleHashesChange}
          />
        </FormGroup>
        <Button color="primary" size="lg" block>
          Mine
        </Button>
      </Form>
    );

    if (this.state.doMining) {
      let wallet = this.state.wallet;
      let encodedWallet = 'https://nimiq.watch/#' + wallet.split(' ').join('+');
      let hashes = this.state.hashes * 100000;
      return (
        <div>
          <div className="Aligner">
            <div class="Aligner-item--fixed">
              <CoinmiqMiner
                address={wallet}
                targetHash={hashes}
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
          <div class="Aligner-item--fixed">
            <img
              className="LogoCenter"
              src={logo_inverse_small}
              alt="My logo"
            />
            {title}
            {form}
          </div>
        </div>
      );
    }
  }
}

export default Home;
