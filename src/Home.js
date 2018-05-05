import React, { Component } from 'react';

import {
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import CoinmiqMiner from 'react-coinmiq-miner';
import About from './About.js';
import GetMiner from './GetMiner.js';

import './css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      wallet: '',
      poolServer: 'eu.sushipool.com:443',
      doMining: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newWallet = value => {
    window.open('https://nimiq.com', '_blank');
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
          <Label for="wallet">Wallet Address</Label>
          <Input
            type="text"
            name="wallet"
            id="wallet"
            placeholder="NQ04 3F73 CHG5 RCBH CDMM MR5C RNJV 0N6J CXJR"
            value={this.state.wallet}
            onChange={this.handleInputChange}
            size="100"
          />
          <Button color="info" size="sm" onClick={this.newWallet}>
            New wallet
          </Button>
        </FormGroup>
        <FormGroup>
          <Label for="poolServer">Pool Server</Label>
          <Input
            type="select"
            name="poolServer"
            id="poolServer"
            value={this.state.poolServer}
            onChange={this.handleInputChange}
          >
            <option>eu.sushipool.com:443</option>
            <option>pool.nimpool.io:8443</option>
            <option>pool.porkypool.com:8444</option>
            <option>pool.bhlynd.nz:8444</option>
          </Input>
        </FormGroup>
        <Button color="primary" size="lg" block>
          Start Mining!
        </Button>
      </Form>
    );

    const wallet = this.state.wallet;
    debugger;
    const poolServer = this.state.poolServer.split(':')[0];
    const poolPort = this.state.poolServer.split(':')[1];
    const askToMine = this.state.doMining ? (
      <div>
        <CoinmiqMiner
          address={wallet}
          width="auto"
          height="auto"
          autoStart={true}
          displayMode="full"
          border={true}
          poolServer={poolServer}
          poolPort={poolPort}
        />
        <Button color="info" size="sm" onClick={this.checkBalance}>
          Check balance
        </Button>
      </div>
    ) : (
      <div>
        <hr className="my-2" />
        {form}
      </div>
    );

    const jumbotron = (
      <div>
        <Jumbotron>
          <Container fluid={true}>
            <Row>
              <Col>
                <h3>Browser mining made easy.</h3>
                <p className="lead">
                  We provide a JavaScript miner that you can embed into your
                  site. There is nothing to install. Your users loads a page
                  containing our miner from their browser, and they mine for an
                  ad-free experience or in exchange of contents on your site.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>What is cryptocurrency mining?</strong>
                </p>
                <p>
                  A cryptocurrency is a digital or virtual currency that uses
                  cryptography for security. By participating in cryptocurrency
                  mining, you help to secure and contribute to the strength of
                  the network. In return, you receive mining rewards.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>{askToMine}</Col>
            </Row>
          </Container>
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
