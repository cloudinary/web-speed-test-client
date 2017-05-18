import React, { Component, PropTypes } from 'react';

import './InputUrl.scss';

export default class InputUrl extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.submitUrl = this.submitUrl.bind(this);
  }

  submitUrl() {
    this.props.onSubmit(this.input.value)
  }

  render() {
    return (
      <div className="inputUrl">
        <div className="container">
          <input type="url" ref={(input) => this.input = input} />
          <button onClick={this.submitUrl}>START</button>
        </div>
      </div>
    );
  }
}

InputUrl.contextTypes = {
  t: React.PropTypes.func.isRequired
}
