import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardGroup
} from 'reactstrap';

import './App.css';

import CoinmiqMiner from 'react-coinmiq-miner';

import browser from './images/browser.png';
import hashrate from './images/hashrate.png';
import wallet from './images/wallet.png';

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
            </a>. The miner uses a conservative number of threads, but you can
            increase this by clicking the (+) button. Higher threads complete
            faster but use more CPU resources.
          </p>
          <CoinmiqMiner
            address="NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
            targetHash="50000"
            width="300px"
            height="350px"
          />
          <p>
            <strong>Important:</strong>{' '}
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
          </CardBody>
        </Card>
        <br />

        <Card>
          <CardBody>
            <CardTitle>Mining Details</CardTitle>
            <CardText>
              Due to the nature of the blockchain technology that we use, mining
              is performed in a completely decentralised manner (there is no
              central server). At the moment, the miner only supports solo
              mining in the Testnet, but we will implement pooled mining when it
              is released in Q1 2018.
            </CardText>
          </CardBody>
        </Card>
        <br />

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
              with a top-end GPU will not outperform a mobile phone by a factor
              of 10000x. From experience,{' '}
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
              </strong>. This includes a browser-based user-friendly wallet –
              coupled to a lighting-fast payment system to withdraw your payout
              instantly and planned peer-to-peer exchange to convert earnings to
              local currency.
            </CardText>
            <CardText>
              3. Operating on a blockchain optimised for the Web platform means{' '}
              <strong>our miner gains technological advantages</strong> in speed
              and performance compared to{' '}
              <a href="http://www.coinhive.com" target="_blank">
                other alternatives
              </a>{' '}
              that mine privacy-focused coins like Monero and end up being
              blocked by ad-blockers. We require consented browser mining by
              being transparent and asking users before using their resources.
            </CardText>
          </CardBody>
        </Card>
        <br />

        <a name="nimiq" />
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
        </div>
      </div>
    );
  }
}

export default Home;
