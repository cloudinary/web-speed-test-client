import React, { Component, PropTypes } from 'react';

import './Footer.scss';

export default class Footer extends Component {
  static propTypes = {
  };

  render() {

    return (
      <footer className="footer">
      </footer>
    );
  }
}

Footer.contextTypes = {
  t: React.PropTypes.func.isRequired
}
