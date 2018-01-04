import React, { Component } from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';
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
      name: '',
      note: '',
      hashes: 50,
      copied: false
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
        name: this.state.name,
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
    let shareUrl = 'http://' + window.location.host + url;
    let toShow = null;
    let title = 'haha';

    if (this.state.encoded) {
      toShow = (
        <div>
          <CardTitle className="PowLink">
            Your Powlink has been generated and can be found below.
          </CardTitle>
          <CardText className="Sharable">
            <Link to={url} id="myLink">
              {shareUrl}
            </Link>
            {this.state.copied ? (
              <span style={{ color: 'gray' }}>&nbsp;&nbsp;&nbsp;(Copied)</span>
            ) : null}
            <br />
            <br />
            <CopyToClipboard
              text={shareUrl}
              onCopy={() => this.setState({ copied: true })}
            >
              <Button color="info" size="sm">
                Copy to clipboard
              </Button>
            </CopyToClipboard>
          </CardText>
        </div>
      );
    }

    return (
      <div className="PowLink">
        <Card>
          <div>
            <CardTitle className="PowLink">Create a Powlink</CardTitle>
            <CardText className="PowLink">
              This screen lets you create a Proof-of-Work (PoW) link [<a href="http://coinmiq.com/mine/eyJ3YWxsZXQiOiJOUTI3IFJDNUIgOUU1QSBTMDlNIDk1TFEgRzNONCBMSFEwIFU5RFggRURLTSIsIm5vdGUiOiJKdXN0IGEgdGVzdCEiLCJoYXNoZXMiOjIwMDAwfQ==">
                example
              </a>]. Powlinks are sharable hyperlinks that you can send through
              emails, messaging apps or embed in your website. By clicking on
              the link and giving their consent, the recepients of the link can
              mine for you.
            </CardText>
            <hr />
            <Form onSubmit={this.handleSubmit} className="PowLink">
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
                <Label for="name">Name (optional)</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="note">Note (optional)</Label>
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
            <hr />
            <CardBody className="PowLink">{toShow}</CardBody>
          </div>
        </Card>
        <br />
      </div>
    );
  }
}

export default PowLink;
