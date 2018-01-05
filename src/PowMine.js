import React, { Component } from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Button } from 'reactstrap';
import CoinmiqMiner from 'react-coinmiq-miner';

import './App.css';

class PowMine extends Component {
  constructor(props, context) {
    super(props, context);

    let to = props.match.params.to;
    let decoded = null;
    if (to) {
      decoded = JSON.parse(atob(to));
      this.state = {
        decoded: decoded,
        doMining: false
      };
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.setState({
      doMining: true
    });
  }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const decoded = this.state.decoded;
    const doMining = this.state.doMining;
    if (decoded) {
      if (doMining) {
        return (
          <div className="PowMine">
            <Card>
              <CardTitle className="PowMine">
                You have received a Powlink
              </CardTitle>
              <CardBody>
                <CardText>
                  <strong>{decoded.name}</strong> would like you to mine{' '}
                  {decoded.hashes} Hashes for the following wallet address:{' '}
                  {decoded.wallet}.
                </CardText>
                <CardText>
                  This Proof-of-Work link has been shared to you by{' '}
                  <strong>{decoded.name}</strong> with the following message:{' '}
                  <em>{decoded.note}</em>.
                </CardText>
                <p>
                  <strong>Important:</strong>{' '}
                  <em>
                    You are connecting to the{' '}
                    <a
                      href="https://medium.com/nimiq-network/introducing-luna-fa0a845fd33e"
                      target="_blank"
                    >
                      Nimiq Testnet (Luna)
                    </a>. Testnet mining DOES NOT create permanent coins. The
                    balance of your coins in the Testnet may be reset at any
                    time until the release of the Nimiq Mainnet in Q1 2018. Note
                    that mining on mobile devices drains your battery.
                  </em>
                </p>
              </CardBody>
            </Card>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <h3>Please click the [Off] button below to begin mining</h3>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <CoinmiqMiner
                address={decoded.wallet}
                targetHash={decoded.hashes}
                width="300px"
                height="350px"
              />
            </div>
            <br />
          </div>
        );
      } else {
        return (
          <div className="PowMine">
            <Card>
              <CardTitle className="PowMine">
                You have received a Powlink
              </CardTitle>
              <CardBody>
                <CardText>
                  <strong>{decoded.name}</strong> would like you to mine{' '}
                  {decoded.hashes} Hashes for the following wallet address:{' '}
                  {decoded.wallet}.
                </CardText>
                <CardText>
                  This Proof-of-Work link has been shared to you by{' '}
                  <strong>{decoded.name}</strong> with the following message:{' '}
                  <em>{decoded.note}</em>.
                </CardText>
                <p>
                  <strong>Important:</strong>{' '}
                  <em>
                    You are connecting to the{' '}
                    <a
                      href="https://medium.com/nimiq-network/introducing-luna-fa0a845fd33e"
                      target="_blank"
                    >
                      Nimiq Testnet (Luna)
                    </a>. Testnet mining DOES NOT create permanent coins. The
                    balance of your coins in the Testnet may be reset at any
                    time until the release of the Nimiq Mainnet in Q1 2018. Note
                    that mining on mobile devices drains your battery.
                  </em>
                </p>
              </CardBody>
            </Card>
            <br />
            <Button
              color="warning"
              size="lg"
              block
              onClick={this.handleOnClick}
            >
              Yes, I Understand. Do it!
            </Button>
            <br />
          </div>
        );
      }
    } else {
      return (
        <div className="PowMine">
          <Card>
            <CardTitle>Powlink Mining</CardTitle>
            <CardBody>Please return to the above to create a powlink.</CardBody>
          </Card>
          <br />
        </div>
      );
    }
  }
}

export default PowMine;
