import React, { Component } from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class HorizontalCustomLabels extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = value => {
    this.props.onInputChange(value);
  };

  render() {
    const horizontal = this.props.value;
    const horizontalLabels = {
      0: 'Low',
      500: 'Medium',
      1000: 'High'
    };

    const formatHashes = value => value + '0 KH';
    const formatHashesLong = value => value * 1000 + ' Hashes';

    return (
      <div className="slider">
        <Slider
          min={10}
          max={1000}
          value={horizontal}
          labels={horizontalLabels}
          format={formatHashes}
          onChange={this.handleChange}
          tooltip={true}
          step={10}
        />
        <br />
        <div className="value">
          <strong>{formatHashesLong(horizontal)}</strong>
        </div>
      </div>
    );
  }
}

export default HorizontalCustomLabels;
