import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { withTranslation } from 'react-i18next';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <a
            className="logo"
            href={this.props.t('CloudinaryLogoURL')}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              publicId="cloudinary_logo_text_v2_white.svg"
              width="184"
              type="asset"
            ></Image>
          </a>
          <a className="title-link" href="/">
            <h1 className="title">{this.props.t('AppName')}</h1>
          </a>
          <nav className="header-links" aria-label="Header links">
            <a
              className="header-link"
              href="https://cloudinary.com/about"
              target="_blank"
              rel="noreferrer"
            >
              <Image publicId="icon-info.svg" width="16" type="asset"></Image>
              <span>About</span>
            </a>
            <a
              className="header-link"
              href="https://support.cloudinary.com/hc/en-us"
              title={this.props.t('SupportText')}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="support-icon"
                src="https://cloudinary-marketing-res.cloudinary.com/image/upload/v1774328712/icon-support-headphones.svg"
                width="16"
                alt=""
              />
              <span>Support</span>
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default withTranslation()(Header);
