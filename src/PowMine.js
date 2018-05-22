import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import CoinmiqMiner from "react-coinmiq-miner";
import { Iqon } from "react-nimiq-iqons";

import "./css/App.css";

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
        const nimiqWatchUrl =
            "https://nimiq.watch/#" + decoded.wallet.replace(/\s+/g, "+");
        let top = (
            <Card>
                <CardTitle className="PowMine">
                    You have received a mining request from {decoded.name}
                </CardTitle>
                <CardBody>
                    <div className="Sharable">
                        <CardText>
                            <strong>{decoded.name}</strong> has requested you to
                            mine <strong>{decoded.hashes}</strong> Hashes to the
                            following wallet address:
                        </CardText>
                        <div className="Iqon">
                            <Iqon address="{decoded.wallet}" />
                        </div>
                        <CardText className="BigText">
                            <strong>
                                <a href={nimiqWatchUrl} target="_blank">
                                    {decoded.wallet}
                                </a>
                            </strong>
                        </CardText>
                        <CardText>
                            The following message was included in the request:{" "}
                            <strong>{decoded.note}</strong>.
                        </CardText>
                    </div>
                    <CardText>
                        To begin mining, click the button below. You may leave
                        the miner running as long as this page is open. During
                        mining, the wallet address of the recipient will be
                        credited with the appropriate reward depending on the
                        hashrate and mining duration. To quit this process at
                        any time, simply close this page.
                        To create your own sharable link,&nbsp;
                        <Link to="/createPowlink">click here</Link>.
                    </CardText>
                    <CardText>
                        <strong>Important:</strong> Note that mining on mobile
                        devices for a long time may drain your battery.
                    </CardText>
                </CardBody>
            </Card>
        );
        if (decoded) {
            if (doMining) {
                return (
                    <div className="PowMine">
                        {top}
                        <br />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <CoinmiqMiner
                                address={decoded.wallet}
                                targetHash={decoded.hashes}
                                width="auto"
                                height="auto"
                                autoStart={true}
                                border={false}
                                displayMode="compact"
                            />
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="PowMine">
                        {top}
                        <br />
                        <Button
                            color="primary"
                            size="lg"
                            block
                            onClick={this.handleOnClick}
                        >
                            I understand. Do it!
                        </Button>
                    </div>
                );
            }
        } else {
            return (
                <div className="PowMine">
                    <Card>
                        <CardTitle>Powlink Mining</CardTitle>
                        <CardBody>
                            Please return to the above to create a powlink.
                        </CardBody>
                    </Card>
                    <br />
                </div>
            );
        }
    }
}

export default PowMine;
