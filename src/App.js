import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";

import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import MyAwesomeReactComponent from "./MyAwesomeReactComponent";
import "./App.css";

import logo from "./logo.png";
import CoinmiqMiner from "./Coinmiq";

const styles = {
    container: {
        textAlign: "center",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            open: false
        };
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    handleClick() {
        this.setState({
            open: true
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleRequestClose}
            />
        );

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} alt="My logo" />
                </div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <div style={styles.container}>
                            <Card>
                                <CardTitle
                                    title="Browser Mining Made Easy"
                                    subtitle="Click and mine now"
                                />
                                <CardText>
                                    An alternative to advertisement. Through
                                    browser crypto-currency mining via Coinmiq,
                                    now you can turn the computational power of
                                    your users into revenue for your website.
                                    Our mining widget is powered by{" "}
                                    <a href="www.nimiq.com">Nimiq</a>, a
                                    blockchain native to the Web. Once consensus
                                    has been established, simply click the Start
                                    button in the mining widget below, and it
                                    will mine a predetermined number of hashes
                                    (500K in this example) to the{" "}
                                    <a
                                        href="https://nimiq.watch/#NQ27+RC5B+9E5A+S09M+95LQ+G3N4+LHQ0+U9DX+EDKM"
                                        target="_blank"
                                    >
                                        specified wallet address
                                    </a>{" "}
                                    (mine) through performing proof-of-work on
                                    your computer.
                                </CardText>
                            </Card>
                        </div>
                        <div style={styles.container}>
                            <h1>Live Demo</h1>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <CoinmiqMiner />
                            </div>
                            <br/>
                            <RaisedButton
                                label="Embed this in your site!"
                                secondary={true}
                                onClick={this.handleClick}
                            />
                        </div>
                        <div style={styles.container}>
                            <Card>
                                <CardTitle
                                    title="Creating Your Own Widget"
                                    subtitle="Click and mine now"
                                />
                                <CardText>
                                    Coming soon!
                                </CardText>
                            </Card>
                        </div>
                        <div style={styles.container}>
                            <Card>
                                <CardTitle
                                    title="Further Reading"
                                    subtitle="Click and mine now"
                                />
                                <CardText>
                                <h3>Cryptocurrency</h3>
                                <p>It is a revolution in money.</p>
                                <h3>Web browser</h3>
                                <p>
                                    Our mission is to seamlessly transfer values from your
                                    computers to people who need it. Crypto facilitates
                                    this.
                                </p>
                                <h3>Mining</h3>
                                <p>
                                    Mining performs the necessary work to mint coins.
                                    Essentially it trades your computational power and
                                    assign values that are tradable in the open market. We
                                    believe in the decentralised web, so unlike competing
                                    services such as <a href="www.coinhive.com">CoinHive</a>,
                                    we take no hefty commision (which can be up to 30%) for
                                    our service. This is because of our superior technology.
                                </p>
                                </CardText>
                            </Card>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
