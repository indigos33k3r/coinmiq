import React, { Component } from 'react';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  CardGroup
} from 'reactstrap';

import './css/App.css';

import browser from './images/browser.png';
import hashrate from './images/hashrate.png';
import wallet from './images/wallet.png';

class PoweredBy extends Component {
  // constructor(props, context) {
  //     super(props, context);
  // }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <div className="CardGroup">
          <h1>Powered by the Nimiq Blockchain</h1>
          <p>
            Our miner is powered by{' '}
            <a href="http://www.nimiq.com" target="_blank">
              Nimiq
            </a>, a Web-based blockchain technology that provides fast
            decentralised payment network.
          </p>
          <CardGroup>
            <Card>
              <a href="http://www.nimiq.com/miner" target="_blank">
                <CardImg top height="130" src={browser} alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>Browser-first</CardTitle>
                <CardText>
                  Built from ground-up to be native to the Web platform, there
                  is nothing to install to use Nimiq. All functionalities are
                  accessible from the browser with synchronisation time in
                  seconds.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <a
                href="https://nimiq.watch/#chart-global-hashrate"
                target="_blank"
              >
                <CardImg top height="130" src={hashrate} alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>Friendly Mining</CardTitle>
                <CardText>
                  High degree of miner decentralization using Argon2d as the
                  memory-latency bound Proof-of-Work algorithm. This means
                  low-end devices, such as mobiles and laptops, can mine too.
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <a href="http://www.nimiq.com/wallet" target="_blank">
                <CardImg top height="130" src={wallet} alt="Card image cap" />
              </a>
              <CardBody>
                <CardTitle>Instant Transactions</CardTitle>
                <CardText>
                  Off-chain transactions to guarantee near instant, nearly free
                  transactions. payments.
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <br />

          <CardGroup>
            <Card>
              <CardBody>
                <CardTitle>
                  Why not mine Bitcoin, Ethereum or any other high-profile
                  crypto-currencies?
                </CardTitle>{' '}
                <CardText>
                  1. The value of Nimiq is quite high, and it can be mined with
                  similar efficiency on high- and low-end hardwares due to its
                  memory-bound Proof-of-Work algorithm. This means a monster rig
                  with a top-end GPU will not outperform a mobile phone by a
                  factor of 10000x. From experience,{' '}
                  <strong>
                    we expect to see only up to 20x hashrate difference between
                    high- and low-end hardwares
                  </strong>. In contrast, mining non-ASIC cryptocurrencies (like
                  Bitcoin) with CPU makes no financial sense, even on a large
                  distributed scale.
                  <br />
                </CardText>
                <CardText>
                  2. Being native to the Web,{' '}
                  <strong>
                    Nimiq offers an easy way to access its entire coin ecosystem
                  </strong>. This includes a browser-based user-friendly wallet
                  – coupled to a lighting-fast payment system to withdraw your
                  payout instantly and planned peer-to-peer exchange to convert
                  earnings to local currency.
                </CardText>
                <CardText>
                  3. Operating on a blockchain optimised for the Web platform
                  means{' '}
                  <strong>our miner gains technological advantages</strong> in
                  speed and performance compared to other alternatives that take
                  a huge cut, and end up being blocked by ad-blockers.
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default PoweredBy;
