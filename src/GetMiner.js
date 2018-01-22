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
              We provide a JavaScript miner (<a href="http://www.coinmiq.com">
                live demo
              </a>) that you can embed into your site. There is nothing to
              install. Your users loads a page containing our miner from their
              browser, and they mine for an ad-free experience or in exchange of
              contents on your site.
            </CardText>
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
              modern Web application. To install the miner via{' '}
              <a href="https://www.npmjs.com/" target="_blank">
                Node Package Manager
              </a>{' '}
              (npm), simply run the following command: <br />
              <code>$ npm install --save react-coinmiq-miner</code>
            </CardText>
            <CardText>
              Soon we will provide a JavaScript library for Web sites not
              developed React, as well as a WordPress plug-in.
            </CardText>
            <p className="text-primary">
              <strong>
                You are connecting to the{' '}
                <a
                  href="https://medium.com/nimiq-network/introducing-luna-fa0a845fd33e"
                  target="_blank"
                >
                  Nimiq Testnet (Luna)
                </a>. Testnet mining DOES NOT create permanent coins. The
                balance of your coins in the Testnet may be reset at any time
                until the release of the Nimiq Mainnet in Q1 2018. Note that
                mining on mobile devices drains your battery.
              </strong>
            </p>
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
            <CardText>
              Obviously you can use the combination of{' '}
              <strong>autoStart</strong>="true" and <strong>displayMode</strong>="none"
              for stealth mining, however we do not condone this kind of
              behaviour!!
            </CardText>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

export default GetMiner;
