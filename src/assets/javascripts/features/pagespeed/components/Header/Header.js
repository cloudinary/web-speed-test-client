import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Image className="logo" publicId="icon-logo.svg.svg" width="31" type="asset"></Image>
          <h1>{this.context.t("Page Speed")}</h1>
          <a className="learn" href={this.context.t('LearnMoreURL')} target="_blank">{this.context.t("LearnMoreText")}</a>
          <a className="powered-by" href={this.context.t('CloudinaryLogoURL')} target="_blank">
            <div className="label">{this.context.t('PoweredByText')}</div>
            <Image className="logo" publicId="cloudinary_logo_text.svg.svg" width="120" type="asset"></Image>
          </a>
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  t: React.PropTypes.func.isRequired
}
