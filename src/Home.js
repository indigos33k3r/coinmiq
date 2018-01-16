import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Jumbotron,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

import './App.css';

import CoinmiqMiner from 'react-coinmiq-miner';

class Home extends Component {
  // constructor(props, context) {
  //     super(props, context);
  // }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">Browser mining made easy</h1>
          <h2>A cryptocurrency miner for your website.</h2>
          <hr className="my-2" />
          <p>
            We provide a JavaScript miner that you can embed into your site.
            There is nothing to install. Your users loads a page containing our
            miner from their browser, and they mine for an ad-free experience or
            in exchange of contents on your site.
          </p>
          <h4>Live Demo</h4>
          <p>
            Below shows a demonstration of our miner.{' '}
            <strong>
              Click the toggle button on the top left corner and wait until
              consensus has been established
            </strong>. Mining begins when you see the message "Mining to ...".
            Here we set the miner to collect a total of 50K hashes and send the
            mining reward to the{' '}
            <a
              href="https://nimiq.watch/#NQ27+RC5B+9E5A+S09M+95LQ+G3N4+LHQ0+U9DX+EDKM"
              target="_blank"
            >
              following wallet address
            </a>. The miner uses half of available CPU cores by default, but you
            can increase or decrease this by clicking the (+) button. Higher
            threads complete faster but use more CPU resources.
          </p>
          <CoinmiqMiner
            address="NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
            targetHash="50000"
            width="280px"
            height="auto"
          />
          <br />
          <h4>Important</h4>
          <p>
            <em>
              You are connecting to the{' '}
              <a
                href="https://medium.com/nimiq-network/introducing-luna-fa0a845fd33e"
                target="_blank"
              >
                Nimiq Testnet (Luna)
              </a>. Testnet mining DOES NOT create permanent coins. The balance
              of your coins in the Testnet may be reset at any time until the
              release of the Nimiq Mainnet in Q1 2018. Note that mining on
              mobile devices drains your battery.
            </em>
          </p>
        </Jumbotron>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <p className="lead">
            <Link to="/getMiner">
              <Button color="primary" size="lg">
                GET THE MINER!
              </Button>
            </Link>
          </p>
        </div>
        <Card>
          <CardBody>
            <CardTitle>What is Coinmiq?</CardTitle>
            <CardText>
              Coinmiq provides a brand-new JavaScript miner that can be easily
              embedded in your website. Your users will mine Nimiq, a type of
              crypto-currency (<a href="#nimiq">explained here</a>) while they
              are browsing. By letting users pay you with their CPU power, our
              miner provides an excellent alternative to annoying ads.
            </CardText>
            <CardText>
              Our vision is to facilitate easy micro-transactions through the
              Web. By exchanging their computational power for mined
              crypto-currencies, users can now "pay" you with full privacy
              directly from their browser – with a click of a button.
            </CardText>
            <CardText>
              Due to the nature of the blockchain technology that we use, mining
              is performed in a completely decentralised manner (there is no
              central server). At the moment, the miner only supports solo
              mining in the Testnet, but we will implement pooled mining when it
              is released in Q1 2018.{' '}
              <Link to="/whyNimiq">
                More details on the coin and blockchain technology.
              </Link>
            </CardText>
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <CardTitle>News</CardTitle>
            <ul>
              <li>
                <em>07 January 2018</em>:
                <ul>
                  <li>
                    Fixed a small bug with initialisating the number of threads
                    for the miner component. Now you should see the same
                    hashrate from Coinmiq miner and the{' '}
                    <a href="https://www.nimiq.com/miner" target="_blank">
                      Luna Testnet miner
                    </a>.
                  </li>
                  <li>
                    The Nimiq dev team said that pooled mining support will be
                    coming soon.
                  </li>
                  <li>
                    We have implemented a new feature: Proof-of-Work (PoW){' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Proof-of-work_system"
                      target="_blank"
                    >
                      [Wikipedia]
                    </a>{' '}
                    link. This lets you create sharable hyperlink to request
                    other people to mine for you.&nbsp;
                    <Link to="/createPowlink">Try here!</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

export default Home;
