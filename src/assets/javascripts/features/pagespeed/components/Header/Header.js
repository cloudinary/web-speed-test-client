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
          <Image className="logo" publicId="icon-logo.svg.svg" width="31" type="asset"></Image>
          <h1>{this.context.t("Page Speed")}</h1>
          <a className="learn" href="#">{this.context.t("LearnMoreText")}</a>
          <div className="powered-by">
            <div className="label">{this.context.t('PoweredByText')}</div>
            <Image className="logo" publicId="cloudinary_logo_text.svg.svg" width="120" type="asset"></Image>
          </div>
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  t: React.PropTypes.func.isRequired
}
