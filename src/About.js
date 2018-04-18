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
            <CardTitle>News</CardTitle>
            <ul>
              <li>
                <em>6 April 2018</em>:
                <ul>
                  <li>
                    New website design. React plugin updates to work with Nimiq
                    mainnet release candidate.
                  </li>
                </ul>
              </li>
              <li>
                <em>07 January 2018</em>:
                <ul>
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
