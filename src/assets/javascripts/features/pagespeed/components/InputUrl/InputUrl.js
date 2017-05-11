import React, { Component, PropTypes } from 'react';

import './InputUrl.scss';

export default class InputUrl extends Component {
  static propTypes = {
  };

  submitUrl() {
    debugger;
  }

  render() {
    return (
      <div className="inputUrl">
        <div className="container">
          <input type="url" />
          <button onClick={this.submitUrl}>START</button>
        </div>
      </div>
    );
  }
}

InputUrl.contextTypes = {
  t: React.PropTypes.func.isRequired
}
