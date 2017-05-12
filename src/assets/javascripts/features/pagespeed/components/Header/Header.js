import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image, Transformation } from 'cloudinary-react';

import './Header.scss';

export default class Header extends Component {
  static propTypes = {
  };

  render() {

    return (
      <header className="header">
        <div className="container">
          {/*<Image className="logo" publicId="logo.png.png" width="31" type="asset" />*/}
          <h1>{this.context.t("Page Speed")}</h1>
          <a className="learn" href="#">{this.context.t("Learn More")}</a>
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  t: React.PropTypes.func.isRequired
}
