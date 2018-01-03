import React, { Component } from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import Slider from 'react-rangeslider';

import './App.css';
import 'react-rangeslider/lib/index.css';

class HorizontalCustomLabels extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = value => {
    this.props.onInputChange(value);
  };

  render() {
    const horizontal = this.props.value;
    const horizontalLabels = {
      0: 'Low',
      50: 'Medium',
      100: 'High'
    };

    const formatHashes = value => value + ' KH';
    const formatHashesLong = value => value * 1000 + ' Hashes';

    return (
      <div className="slider">
        <Slider
          min={10}
          max={100}
          value={horizontal}
          labels={horizontalLabels}
          format={formatHashes}
          onChange={this.handleChange}
          tooltip={true}
          step={10}
        />
        <br />
        <div className="value">
          <strong>{formatHashesLong(horizontal)}</strong>
        </div>
      </div>
    );
  }
}

class PowLink extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      encoded: null,
      wallet: '',
      note: '',
      hashes: 20
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHashesChange = this.handleHashesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
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
      let to = {
        wallet: this.state.wallet,
        note: this.state.note,
        hashes: this.state.hashes * 1000
      };
      let encoded = btoa(JSON.stringify(to));
      this.setState({
        encoded: encoded
      });
    }
  }

  render() {
    let url = '/mine/' + this.state.encoded;
    let toShow = null;
    console.log(this.state.encoded);
    if (this.state.encoded) {
      toShow = (
        <div>
          <CardTitle>
            Your Powlink can be found below. You can share it.
          </CardTitle>
          <CardText>
            <Link to={url} id="myLink">
              {url}
            </Link>
          </CardText>
        </div>
      );
    }

    return (
      <div className="PowLink">
        <Card>
          <div>
            <CardTitle>Create a Powlink</CardTitle>
            <CardText>
              This screen lets you create a Proof-of-Work (<a
                href="https://en.wikipedia.org/wiki/Proof-of-work_system"
                target="_blank"
              >
                PoW
              </a>) link. You can then share the Powlink through emails,
              messaging apps, or embedding it on your website. This can be used
              to request other people to mine for you.
            </CardText>
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="wallet">Wallet Address</Label>&nbsp;<small>
                  (<a href="https://nimiq.com/miner" target="_blank">
                    create a new wallet
                  </a>)
                </small>
                <Input
                  type="wallet"
                  name="wallet"
                  id="wallet"
                  placeholder="e.g. NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
                  value={this.state.wallet}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="note">Note</Label>
                <Input
                  type="note"
                  name="note"
                  id="note"
                  placeholder="Enter note for recipient"
                  value={this.state.note}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Target Hashes</Label>
                <HorizontalCustomLabels
                  value={this.state.hashes}
                  onInputChange={this.handleHashesChange}
                />
              </FormGroup>
              <Button color="primary" size="lg" block>
                Create Powlink
              </Button>
            </Form>
            <br />
            <CardBody>{toShow}</CardBody>
          </div>
        </Card>
        <br />
      </div>
    );
  }
}

export default PowLink;
