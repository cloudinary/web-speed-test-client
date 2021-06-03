import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
// import Share from '../Share/Share';
import { withTranslation } from 'react-i18next';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
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
          <a
            className="learn"
            href={this.props.t('LearnMoreURL')}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.t('LearnMoreText')}
          </a>
          <a
            className="support"
            href={this.props.t('SupportURL')}
            title={this.props.t('SupportText')}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              publicId="icon-support-v2.svg"
              width="21"
              type="asset"
            ></Image>
          </a>
          {/* <Share icon="icon-share-gray.svg" shareUrl={window.location.href.split('?')[0]} title={this.props.t("PageTitleA") + ' - ' + this.props.t('PageTitleB')} /> */}
          <a
            className="powered-by"
            href={this.props.t('CloudinaryLogoURL')}
            target="_blank"
            rel="noreferrer"
          >
            <div className="label">{this.props.t('PoweredByText')}</div>
            <Image
              publicId="cloudinary_logo_text.svg"
              width="120"
              type="asset"
            ></Image>
          </a>
        </div>
      </header>
    );
  }
}

export default withTranslation()(Header);
