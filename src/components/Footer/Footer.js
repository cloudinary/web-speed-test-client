import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { withTranslation } from 'react-i18next';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <h1>{this.props.t('AppName')}</h1>
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
                publicId="cloudinary_logo_white_0720_svg.svg"
                width="155"
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
                publicId="facebook.png"
                width="16"
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
                publicId="twitter.svg"
                width="16"
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
                publicId="linkedin2.png"
                width="16"
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
