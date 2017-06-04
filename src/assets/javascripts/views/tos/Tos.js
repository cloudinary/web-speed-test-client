import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tos extends Component {
  render() {
    return (
      <div className="static-page container">
        <h1>{this.context.t('Terms of Service')}</h1>
        <hr />
        <p>Hi this is tos page</p>
        <p>
          <Link to="/">Back To Home View</Link>
        </p>
      </div>
    );
  }
}

Tos.contextTypes = {
  t: React.PropTypes.func.isRequired
}
