import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css"; // for ES6 modules


class HashRate extends React.Component {
  render() {
    var textStyle = {
      fontSize: 48,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
      <div style={textStyle}>
        {this.props.display} kH/s
      </div>
    );
  }
}

class MsgBox extends React.Component {
    render() {
        var textStyle = {
          fontSize: 14,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold"
        };

        return (
          <div>
              <div style={textStyle}>
                <a href={"https://nimiq.watch/#" + this.props.display}></a>
                {this.props.display}
              </div>
          </div>
        );
    }
}

class ThreadCountBox extends React.Component {
    render() {
        var textStyle = {
          fontSize: 14,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold"
        };

        return (
          <div>
              <div style={textStyle}>
              {this.props.total} kHashes, {this.props.time} seconds, {this.props.display} threads
              </div>
          </div>
        );
    }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hashRate: 0,
      threadCount: Math.ceil(navigator.hardwareConcurrency / 2),
      doMining: false,
      statusMsg: "Loading.",
      miner: undefined,
      buttonDisabled: true,
      address: "",
      totalHashCount: 0,
      totalElapsed: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleMiningChange = this.handleMiningChange.bind(this);

  }

  handleMiningChange(e) {

    var doMining = e.target.checked;
    var miner = this.state.miner;
    var address = this.state.address;
    miner.on('start', () => _onMinerStarted());
    miner.on('hashrate-changed', () => _onHashRateChanged());
    miner.on('stop', () => _onMinerStopped());

    var newMsg = '';
    let currentComponent = this;

    function _onMinerStarted() {
        currentComponent.setState({
            hashRate: miner.hashrate
        });
    }

    function _onHashRateChanged() {
        var newHashRate = miner.hashrate;
        var currentHashCount = currentComponent.state.totalHashCount;
        var currentElapsed = currentComponent.state.totalElapsed;
        var newHashCount = currentHashCount + miner._lastHashCounts[miner._lastHashCounts.length-1];
        var newElapsed = currentElapsed + parseInt(miner._lastElapsed[miner._lastElapsed.length-1], 10);
        currentComponent.setState({
            hashRate: newHashRate,
            totalHashCount: parseInt(newHashCount, 10),
            totalElapsed: newElapsed
        });
    }

    function _onMinerStopped() {
        currentComponent.setState({
            hashRate: 0
        });
    }

    if (doMining) {
        newMsg = address;
        miner.startWork();
    } else {
        newMsg = address;
        miner.stopWork();
    }
    this.setState({
        statusMsg: newMsg
    });
  }

  increase(e) {
      var newThreadCount = this.state.threadCount;
      var miner = this.state.miner;
      if (newThreadCount < navigator.hardwareConcurrency) {
          newThreadCount += 1;
      }
      this.setState({
          threadCount: newThreadCount
      });
      miner.threads = newThreadCount;
  }

  decrease(e) {
      var newThreadCount = this.state.threadCount;
      var miner = this.state.miner;
      if (newThreadCount > 1) {
          newThreadCount -= 1;
      }
      this.setState({
          threadCount: newThreadCount
      });
      miner.threads = newThreadCount;
  }

  render() {
    var backgroundStyle = {
      padding: 10,
      backgroundColor: "#FFC53A",
      width: 360,
      height: 180,
      borderRadius: 10,
      textAlign: "center",
    };

    var incDecStyle = {
      margin: 5,
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px",
    };

    return (
      <div style={backgroundStyle}>
        <MsgBox display={this.state.statusMsg}/>
        <hr />
        <HashRate display={this.state.hashRate}/>
        <label>
          <Toggle
            defaultChecked={this.state.doMining}
            onChange={this.handleMiningChange}
            disabled={this.state.buttonDisabled} />
        </label>
        <hr />
        <ThreadCountBox display={this.state.threadCount} total={this.state.totalHashCount} time={this.state.totalElapsed}/>
        <button onClick={this.decrease} style={incDecStyle} disabled={this.state.buttonDisabled}>-</button>
        <button onClick={this.increase} style={incDecStyle} disabled={this.state.buttonDisabled}>+</button>
      </div>
    );
  }

  componentDidMount() {

      let currentComponent = this;
      function updateMsg(newMsg) {
          currentComponent.setState({
              statusMsg: newMsg
          });
      }

      async function initialise() {

          // $ is the Nimiq.Core instance
          const $ = {};
          window.$ = $;

          function _onConsensusEstablished() {
              // const height = $.blockchain.height;
              const address = $.wallet.address.toUserFriendlyAddress();
              var newMsg = address;
              updateMsg(newMsg);
              currentComponent.setState({
                  miner: $.miner,
                  buttonDisabled: false,
                  address: address
              });
          }

          function _onHeadChanged() {
              const height = $.blockchain.height;
              var newMsg = 'Now at height ' + height;
              updateMsg(newMsg);
          }

          function _onPeersChanged() {
              var newMsg = 'Now connected to ' + $.network.peerCount + ' peers.';
              updateMsg(newMsg);
          }

          var newMsg = 'Establishing consensus.';
          updateMsg(newMsg);

          $.consensus = await window.Nimiq.Consensus.light();

          $.blockchain = $.consensus.blockchain;
          $.mempool = $.consensus.mempool;
          $.network = $.consensus.network;
          $.wallet = await window.Nimiq.Wallet.getPersistent();
          $.accounts = $.blockchain.accounts;
          $.miner = new window.Nimiq.Miner($.blockchain, $.mempool, $.wallet.address);

          $.consensus.on('established', () => _onConsensusEstablished());
          $.consensus.on('lost', () => console.error('Consensus lost'));
          // $.blockchain.on('head-changed', () => _onHeadChanged());
          // $.network.on('peers-changed', () => _onPeersChanged());

          newMsg = 'Connecting.';
          updateMsg(newMsg);
          $.network.connect();

      }

      window.Nimiq.init(initialise, function(code) {
          switch (code) {
              case window.Nimiq.ERR_WAIT:
                  alert('Another Nimiq instance is already running');
                  break;
              case window.Nimiq.ERR_UNSUPPORTED:
                  alert('Browser not supported');
                  break;
              case window.Nimiq.Wallet.ERR_INVALID_WALLET_SEED:
                  alert("Invalid wallet seed");
                  break;
              default:
                  alert('Nimiq initialization error');
                  break;
          }
      });
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Coinmiq</h2>
        </div>
        <p className="App-intro">
          A crypto miner for your website. Powered by <a href="www.nimiq.com">Nimiq</a>, a blockchain native to the Web.
        </p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CounterParent />
        </div>
      </div>
    );
  }
}

export default App;
