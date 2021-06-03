import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { withTranslation } from 'react-i18next';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link className="brand" to="/">
            <Image
              className="logo"
              publicId="icon-logo.svg"
              width="31"
              type="asset"
            ></Image>
            <h1>{this.props.t('AppName')}</h1>
          </Link>
          <div className="links">
            <a
              href={this.props.t('AboutButtonURL')}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.t('AboutButtonText')}
            </a>
            <a
              href={this.props.t('PrivacyButtonURL')}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.t('PrivacyButtonText')}
            </a>
            <a
              href={this.props.t('TermsButtonURL')}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.t('TermsButtonText')}
            </a>
          </div>
          <div className="social">
            <a
              href={this.props.t('CloudinaryLogoURL')}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                publicId="icon-cloudinary.png"
                width="40"
                type="asset"
                dpr="auto"
              ></Image>
            </a>
            <a
              href={this.props.t('LinkedinURL')}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                publicId="icon-lin.png"
                width="24"
                type="asset"
                dpr="auto"
              ></Image>
            </a>
            <a
              href={this.props.t('FacebookURL')}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                publicId="icon-fb.png"
                width="24"
                type="asset"
                dpr="auto"
              ></Image>
            </a>
            <a
              href={this.props.t('GooglePlusURL')}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                publicId="icon-gplus.png"
                width="24"
                type="asset"
                dpr="auto"
              ></Image>
            </a>
            <a
              href={this.props.t('TwitterURL')}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                publicId="icon-twitter.png"
                width="24"
                type="asset"
                dpr="auto"
              ></Image>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
