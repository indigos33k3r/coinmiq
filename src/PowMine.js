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
              <CardTitle>Powlink Mining</CardTitle>
              <CardBody>
                <CardText>
                  You are mining {decoded.hashes} Hashes for {decoded.wallet}
                </CardText>
                <CardText>Note: {decoded.note}</CardText>
                <CardText>
                  You are mining test coins, and it may drain your battery!
                </CardText>
              </CardBody>
            </Card>
            <br />
            <CoinmiqMiner
              address={decoded.wallet}
              targetHash={decoded.hashes}
              width="300px"
              height="350px"
            />
            <br />
          </div>
        );
      } else {
        return (
          <div className="PowMine">
            <Card>
              <CardTitle>Powlink Mining</CardTitle>
              <CardBody>
                <CardText>
                  You are about to mine {decoded.hashes} Hashes for{' '}
                  {decoded.wallet}
                </CardText>
                <CardText>Note: {decoded.note}</CardText>
                <CardText>
                  You are mining test coins, and it may drain your battery!
                </CardText>
              </CardBody>
            </Card>
            <br />
            <Button
              color="warning"
              size="lg"
              block
              onClick={this.handleOnClick}
            >
              Do it!
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
