import React, { Component } from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import './css/App.css';

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
                  address="NQ32 VGUP 1GQM J8YL 1QNS RYU8 CUUB XG35 A1Q7"
                  targetHash="500000"
                  width="260px"
                  height="auto"
                  autoStart="false"
                  displayMode="full"
                  border="true"
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
              </a>, a popular JavaScript library for building user interfaces in
              modern Web application (vanilla Javascript version is coming
              soon!). To install the miner via{' '}
              <a href="https://www.npmjs.com/" target="_blank">
                Node Package Manager
              </a>{' '}
              (npm), simply run the following command: <br />
              <code>$ npm install react-coinmiq-miner</code>
            </CardText>
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
                address in user-friendly format, e.g. `NQ32 VGUP 1GQM J8YL 1QNS
                RYU8 CUUB XG35 A1Q7` (with the spaces). This can be created from{' '}
                <a href="http://www.nimiq.com/miner" target="_blank">
                  any wallet app
                </a>{' '}
                for the Nimiq blockchain.
              </li>
              <li>
                <strong>targetHash</strong>: The total number of hashes to mine
                for. Useful for timed mining. Faster computers will reach this
                target earlier. If this property is not specified, no progress
                bar will be shown, and mining will run forever.
              </li>
              <li>
                <strong>width</strong>: Width of the widget box, defaults to
                "auto", but you can specify this in pixel, e.g. "260px".
              </li>
              <li>
                <strong>height</strong>: Height of the widget box, defaults to
                "auto", but you can specify this in pixel, e.g. "310px".
              </li>
              <li>
                <strong>autoStart</strong>: Whether to start the miner
                automatically (without having the user do it). Default to
                "false".
              </li>
              <li>
                <strong>displayMode</strong>: Different display modes. Defaults
                to "full".
                <ul>
                  <li>
                    "full" will show the complete interface, including Coinmiq
                    logo (thank you!!).
                  </li>
                  <li>
                    "compact" will hide the logo and buttons to
                    increase/decrease thread counts.
                  </li>
                  <li>
                    "none" will not show anything. Progress will be printed to
                    the developer console.
                  </li>
                </ul>
              </li>
              <li>
                <strong>border</strong>: Whether to show border. Defaults to
                "true".
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
