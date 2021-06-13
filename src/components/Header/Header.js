import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import Share from '../Share/Share';
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
              publicId="cloudinary_logo_text.svg"
              width="155"
              type="asset"
            ></Image>
          </a>
          <h1 className="title">{this.props.t('AppName')}</h1>
          <a
            className="btn learn"
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
              width="22"
              type="asset"
            ></Image>
          </a>
          <Share
            icon="icon-share-gray.svg"
            shareUrl={this.props.t('meta_social_url')}
            title={
              this.props.t('PageTitleA') + ' - ' + this.props.t('PageTitleB')
            }
          />
        </div>
      </header>
    );
  }
}

export default withTranslation()(Header);
