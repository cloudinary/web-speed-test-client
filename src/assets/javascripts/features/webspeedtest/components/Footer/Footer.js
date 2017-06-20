import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { Image, Transformation } from 'cloudinary-react';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link className="brand" to="/">
            <Image className="logo" publicId="icon-logo.svg" width="31" type="asset"></Image>
            <h1>{this.context.t("AppName")}</h1>
          </Link>
          <div className="links">
            <a href={this.context.t('AboutButtonURL')} target="_blank">{this.context.t("AboutButtonText")}</a>
            <a href={this.context.t('PrivacyButtonURL')} target="_blank">{this.context.t("PrivacyButtonText")}</a>
            <a href={this.context.t('TermsButtonURL')} target="_blank">{this.context.t("TermsButtonText")}</a>
          </div>
          <div className="social">
            <a href={this.context.t('CloudinaryLogoURL')} target="_blank">
              <Image publicId="icon-cloudinary.png" width="40" type="asset" dpr="auto"></Image>
            </a>
            <a href={this.context.t('LinkedinURL')} target="_blank">
              <Image publicId="icon-lin.png" width="24" type="asset" dpr="auto"></Image>
            </a>
            <a href={this.context.t('FacebookURL')} target="_blank">
              <Image publicId="icon-fb.png" width="24" type="asset" dpr="auto"></Image>
            </a>
            <a href={this.context.t('GooglePlusURL')} target="_blank">
              <Image publicId="icon-gplus.png" width="24" type="asset" dpr="auto"></Image>
            </a>
            <a href={this.context.t('TwitterURL')} target="_blank">
              <Image publicId="icon-twitter.png" width="24" type="asset" dpr="auto"></Image>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.contextTypes = {
  t: React.PropTypes.func.isRequired
}
