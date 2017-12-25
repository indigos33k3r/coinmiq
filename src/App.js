import React, { Component } from 'react';
import './App.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css"; // for ES6 modules
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Form, Text, TextArea } from 'react-form';

class HashRate extends React.Component {
  render() {
    let textStyle = {
      fontSize: 48,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
      <div style={textStyle}>
        {this.props.display} H/s
      </div>
    );
  }
}

class MsgBox extends React.Component {
    render() {
        let textStyle = {
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
        let textStyle = {
          fontSize: 14,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold"
        };

        let ts = "threads";
        if (this.props.display === 1) {
            ts = "thread"
        }
        return (
          <div>
              <div style={textStyle}>
              {this.props.total} Hashes, {this.props.time} seconds, {this.props.display} {ts}
              </div>
          </div>
        );
    }
}

class BasicForm extends Component {

   constructor( props ) {
     super( props );
     this.state = {};
   }

   render() {
     return (
       <div>
         <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
           { formApi => (
             <form onSubmit={formApi.submitForm} id="form2">

               <label htmlFor="firstName">Wallet Address </label>
               <Text field="firstName" id="firstName" />
               <br /><br />

               <label htmlFor="lastName">Name </label>
               <Text field="lastName" id="lastName" />
               <br /><br />

               <label htmlFor="bio">Message </label>
               <TextArea field="bio" id="bio" />
               <br /><br />

               <button type="submit" className="mb-4 btn btn-primary">Submit</button>
               <br /><br />

             </form>
           )}
         </Form>
       </div>
     );
   }
 }

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hashRate: 0,
      // threadCount: Math.ceil(navigator.hardwareConcurrency / 2),
      threadCount: 1,
      doMining: false,
      statusMsg: "Loading.",
      miner: undefined,
      buttonDisabled: true,
      totalHashCount: 0,
      totalElapsed: 0,
      progressPercent: 0,

      // should be input parameters
      address: "NQ27 RC5B 9E5A S09M 95LQ G3N4 LHQ0 U9DX EDKM",
      targetHash: 1000000,

    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleMiningButtonChange = this.handleMiningButtonChange.bind(this);

  }

  handleMiningButtonChange(e) {

    let doMining = e.target.checked;
    let miner = this.state.miner;
    let address = this.state.address;
    miner.on('start', () => _onMinerStarted());
    miner.on('hashrate-changed', () => _onHashRateChanged());
    miner.on('stop', () => _onMinerStopped());

    let newMsg = '';
    let currentComponent = this;

    function _onMinerStarted() {
        currentComponent.setState({
            hashRate: miner.hashrate
        });
    }

    function _onHashRateChanged() {
        let newHashRate = miner.hashrate;
        let currentHashCount = currentComponent.state.totalHashCount;
        let currentElapsed = currentComponent.state.totalElapsed;
        let newHashCount = currentHashCount + miner._lastHashCounts[miner._lastHashCounts.length-1];
        let newElapsed = currentElapsed + parseInt(miner._lastElapsed[miner._lastElapsed.length-1], 10);
        let totalHashCount = parseInt(newHashCount, 10);
        let progressPercent = parseInt(totalHashCount / currentComponent.state.targetHash * 100, 10);
        let buttonDisabled = currentComponent.state.buttonDisabled;
        if (progressPercent > 100) {
            progressPercent = 100;
            doMining = false;
            // e.target.checked = false; // doesn't work
            miner.stopWork();
            buttonDisabled = true;
        }
        currentComponent.setState({
            hashRate: newHashRate,
            totalHashCount: totalHashCount,
            progressPercent: progressPercent,
            totalElapsed: newElapsed,
            buttonDisabled: buttonDisabled
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
    newMsg = "Mining to " + newMsg + ".";
    this.setState({
        statusMsg: newMsg
    });
  }

  increase(e) {
      let newThreadCount = this.state.threadCount;
      let miner = this.state.miner;
      if (newThreadCount < navigator.hardwareConcurrency) {
          newThreadCount += 1;
      }
      this.setState({
          threadCount: newThreadCount
      });
      miner.threads = newThreadCount;
  }

  decrease(e) {
      let newThreadCount = this.state.threadCount;
      let miner = this.state.miner;
      if (newThreadCount > 1) {
          newThreadCount -= 1;
      }
      this.setState({
          threadCount: newThreadCount
      });
      miner.threads = newThreadCount;
  }

  render() {
    let backgroundStyle = {
      padding: 10,
      backgroundColor: "#FFC53A",
      width: 440,
      height: 220,
      borderRadius: 10,
      textAlign: "center",
    };

    let incDecStyle = {
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
        <Progress percent={this.state.progressPercent} />
        <hr />
        <HashRate display={this.state.hashRate}/>
        <label>
          <Toggle
            defaultChecked={this.state.doMining}
            onChange={this.handleMiningButtonChange}
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
              updateMsg("Consensus established.");
              currentComponent.setState({
                  miner: $.miner,
                  buttonDisabled: false,
                  address: address
              });
          }

          function _onHeadChanged() {
              const height = $.blockchain.height;
              let newMsg = 'Now at height ' + height;
              updateMsg(newMsg);
          }

          function _onPeersChanged() {
              let newMsg = 'Now connected to ' + $.network.peerCount + ' peers.';
              updateMsg(newMsg);
          }

          let newMsg = 'Establishing consensus.';
          updateMsg(newMsg);

          $.consensus = await window.Nimiq.Consensus.light();
          $.blockchain = $.consensus.blockchain;
          $.mempool = $.consensus.mempool;
          $.network = $.consensus.network;

          // $.wallet = await window.Nimiq.Wallet.getPersistent();
          $.wallet = { address: window.Nimiq.Address.fromUserFriendlyAddress(currentComponent.state.address) };

          let uuid = require("uuid");
          let id = "coinmiq-" + uuid.v4();
          let extraData = window.Nimiq.BufferUtils.fromAscii(id);
          console.log(id);

          $.miner = new window.Nimiq.Miner($.blockchain, $.mempool, $.wallet.address, extraData);
          $.miner.threads = 1;

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
          <h1>Coinmiq — a cryptocurrency miner for your website</h1>
        </div>
        <div className="App-form">
            <h2>A crypto miner for your website</h2>
            <p>
                An alternative to advertisement.
                Through browser crypto-currency mining via Coinmiq, now you can turn the computational power
                of your users into revenue for your website.
            </p>
            <p>
                Our mining widget is powered by <a href="www.nimiq.com">Nimiq</a>, a blockchain native to the Web.
                Once consensus has been established, simply click the Start button in the mining widget below, and
                it will mine a predetermined number of hashes (100K) to
                the <a href="https://nimiq.watch/#NQ27+RC5B+9E5A+S09M+95LQ+G3N4+LHQ0+U9DX+EDKM" target="_blank">
                specified wallet address</a> using your computer.
            </p>
            <h3>Live Demo</h3>
            <p>Click the button below to start</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CounterParent />
        </div>
        <div className="App-form">
            <h3>Genenerate your own widget</h3>
            <p>
                Alternatively you can also generate your own widget. Fill in the form below. Blah blah how to use this thing.
            </p>
            <BasicForm />
            <h2>Further Reading</h2>
            <h3>Cryptocurrency</h3>
            <p>
                It is a revolution in money.
            </p>
            <h3>Web browser</h3>
            <p>Our mission is to seamlessly transfer values from your computers to people who need it. Crypto facilitates this.</p>
            <h3>Mining</h3>
            <p>
                Mining performs the necessary work to mint coins. Essentially it trades your computational power and assign values
                that are tradable in the open market.
                We believe in the decentralised web, so unlike competing services such as <a href="www.coinhive.com">CoinHive</a>,
                we take no hefty commision (which can be up to 30%) for our service. This is because of our superior technology.
            </p>
        </div>
      </div>
    );
  }
}

export default App;
