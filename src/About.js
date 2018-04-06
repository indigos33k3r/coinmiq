import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import './css/App.css';

class About extends Component {
  // constructor(props, context) {
  //     super(props, context);
  // }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Card>
          <CardBody>
            <CardTitle>What is Coinmiq?</CardTitle>
            <CardText>
              Coinmiq provides a brand-new JavaScript miner that can be easily
              embedded in your website. Your users will mine{' '}
              <a href="https://nimiq.com">Nimiq</a>
              , a brand-new Web-based cryptocurrency, while they are browsing.
              By letting users pay you with their CPU power, our miner provides
              an excellent alternative to annoying ads.
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
              is released in 2018.
            </CardText>
            <CardTitle>News</CardTitle>
            <ul>
              <li>
                <em>6 April 2018</em>:
                <ul>
                  <li>
                    New website design. React plugin updates to work with the
                    mainnet release candidate.
                  </li>
                </ul>
              </li>
              <li>
                <em>31 January 2018</em>:
                <ul>
                  <li>
                    Website improvement. Mainnet release could be coming anytime
                    soon! Wait for it.
                  </li>
                </ul>
              </li>
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
      </div>
    );
  }
}

export default About;
