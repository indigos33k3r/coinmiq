import React, { Component } from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import './App.css';

class GetMiner extends Component {
  // constructor() {
  //     super();
  // }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const myString = `
    import React from 'react';
    import CoinmiqMiner from 'react-coinmiq-miner';

    export default MyClass extends React.Component {
        render() {
            return (
                <CoinmiqMiner
                  address="NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM"
                  targetHash="500000"
                  width="260px"
                  height="310px"
                />
            )
        }
    }`;

    return (
      <div className="GetMiner">
        <Card>
          <CardBody>
            <CardTitle>Start mining now</CardTitle>
            <CardText>
              Our miner is available as a{' '}
              <a
                href="https://www.npmjs.com/package/react-coinmiq-miner"
                target="_blank"
              >
                component
              </a>{' '}
              in{' '}
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>, a popular JavaScript library for building user interfaces.
              It is often the preferred front-end library for building modern,
              scalable Web application in JavaScript. To install the miner via{' '}
              <a href="https://www.npmjs.com/" target="_blank">
                Node Package Manager
              </a>{' '}
              (npm), simply run the following command: <br />
              <code>$ npm install --save react-coinmiq-miner</code>
            </CardText>
            <CardText />
            <CardText>
              Soon we will provide an embeddable JavaScript library for Web
              sites not developed React, as well as a WordPress plug-in.
            </CardText>
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <CardTitle>Component Usage</CardTitle>
            <CardText>
              The example below shows how the miner could be used in a React
              application:
            </CardText>
            <pre>{myString}</pre>
            <CardText>
              The following are configurable properties of the miner:
            </CardText>
            <ul>
              <li>
                <strong>address</strong>: Required. Must be a valid Nimiq wallet
                address in user-friendly format, e.g. `NQ27 RC5B 9E5A S09M 95LQ
                G3N4 LHQ0 U9DX EDKM` (with the spaces). This can be created from{' '}
                <a href="http://www.nimiq.com/miner" target="_blank">
                  any wallet app
                </a>{' '}
                for the Nimiq blockchain.
              </li>
              <li>
                <strong>targetHash</strong>: The total number of hashes to mine
                for. Defaults to 500K. Faster computers will reach this target
                earlier.
              </li>
              <li>
                <strong>width</strong>: Width of the widget box, defaults to
                260px.
              </li>
              <li>
                <strong>height</strong>: Height of the widget box, defaults to
                310px.
              </li>
            </ul>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

export default GetMiner;
