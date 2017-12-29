import React, { Component } from 'react';

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

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">Browser mining made easy</h1>
          <h2>A cryptocurrency miner for your website.</h2>
          <hr className="my-2" />
          <p>
            We provide a JavaScript mining widget that you can embed into your
            site. There is nothing to install. Your users loads a page
            containing our embeddable widget from their browser, and they mine
            for an ad-free experience or in exchange of contents on your site.
          </p>
          <p>
            Our vision is to facilitate easy micro-transactions through the Web.
            By exchanging their computational power for mined crypto-currencies,
            users can now "pay" you with full privacy directly from their
            browser – with a click of a button.
          </p>
          <h4>Live Demo</h4>
          <p>
            Below shows a demonstration of our mining widget. Once consensus has
            been established, a toggle button will appear to switch between
            mining (On) or idle (Off) state. Switch the toggle button to{' '}
            <strong>On</strong> to start mining.
          </p>
          <p>
            The widget can be configured to mine for a number of hashes. In this
            demonstration, we have set the target hashes to{' '}
            <strong>500K</strong> and configured the payout to the{' '}
            <a
              href="https://nimiq.watch/#NQ27+RC5B+9E5A+S09M+95LQ+G3N4+LHQ0+U9DX+EDKM"
              target="_blank"
            >
              following wallet address
            </a>.
          </p>
          <p>
            By default, the miner uses only one thread, but you can adjust the
            number of threads by clicking the (+) and (-) buttons. Higher
            threads will be more CPU-intensive.
          </p>
          <CoinmiqMiner
            address="NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
            targetHash="500000"
            width="300px"
            height="350px"
          />
        </Jumbotron>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <p className="lead">
            <Button color="primary" size="lg">
              GET MINING WIDGET
            </Button>
            {'   '}
            <Button color="danger" size="lg">
              REMOTE MINING
            </Button>
          </p>
        </div>
        <Card>
          <CardBody>
            <CardTitle>Remote Mining</CardTitle>
            <CardText>
              Our technology also allows you donate your hashrate and seamlessly
              transfer micro-values over the Internet by mining for someone
              else. This can be useful when you need to pay or send small amount
              of money to someone but do not have cash ready. In this case, you
              mine from your computer and set the wallet address of that person
              as the payout address.
            </CardText>
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <CardTitle>What is Coinmiq?</CardTitle>
            <CardText>
              Coinmiq provides a brand-new JavaScript miner that can be easily
              embedded in your website. Your users will mine Nimiq, a type of
              crypto-currency (<a href="#nimiq">explained here</a>) while they
              are browsing. By letting users pay you with their CPU power, our
              mining widget provides an excellent alternative to annoying ads.
            </CardText>
            <CardText>
              Why not mine Bitcoin, Ethereum or any other high-profile
              crypto-currencies? We explain our reasons below.
            </CardText>
            <CardText>
              1. The value of Nimiq is quite high, and it can be mined with
              similar efficiency on high- and low-end hardwares alike on the
              CPU. This means, a monster rig with a top-end GPU is not likely to
              outperform a mobile phone by a factor of 10000x. From our
              experience,{' '}
              <strong>
                we expect to see only 10-20x hashrate difference between high-
                and low-end hardwares
              </strong>. Mining other cryptocurrencies (especially those that
              are not ASIC-resistant, like Bitcoin) with CPU makes no financial
              sense, even on a large distributed scale.
              <br />
            </CardText>
            <CardText>
              2. Being a blockchain native to the Web,{' '}
              <strong>
                Nimiq offers an easy way to access its entire coin ecosystem
              </strong>, including having a user-friendly wallet accessible from
              the browser, lighting-fast payment system to withdraw your payout
              instantly with a low-fee and (planned) p2p exchange to convert
              your earnings to the local currency.
            </CardText>
            <CardText>
              3. Since it is being built from ground-up to mine on an entirely
              new blockchain native to the Web,{' '}
              <strong>
                our mining widget has more technological advantages
              </strong>{' '}
              compared to other alternatives – in speed and performance. Many
              malwares that covertly perform crypto-mining prefer Monero due to
              its anonimity, but since we focus on consented browser mining (by
              being transparent and asking the user before using their
              resources), we like the ease-of-payment and simplicity that Nimiq
              offers.
            </CardText>
          </CardBody>
        </Card>

        <a name="nimiq" />
        <div className="CardGroup">
          <h1>Powered by the Nimiq Blockchain</h1>
          <p>
            Our mining widget is powered by{' '}
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
                  is nothing to install to use Nimiq. All functionalities of the
                  decentralised payment network are accessible from the Web
                  browser with synchronisation time in seconds.
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
                  High degree of miner decentralization by using Argon2d as the
                  memory-latency bound Proof-of-Work algorithm. This lets
                  low-end devices, such as mobiles and laptops, to mine too.
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
                  Lightning network and atomic swaps for cross-chain
                  compatibility and speedy payments.
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
