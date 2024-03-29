import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import cx from 'classnames';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

import './Share.scss';

class Share extends Component {
  static propTypes = {
    icon: PropTypes.string,
    shareUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded || false
    };
    this.toggleShareWidget = this.toggleShareWidget.bind(this);
  }

  toggleShareWidget() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const shareCls = cx('share', { expanded: this.state.expanded });

    const { icon, shareUrl, title, children } = this.props;

    return (
      <div className={shareCls}>
        <button className="share-toggle" onClick={this.toggleShareWidget}>
          <Image
            publicId={icon || 'icon-share.svg'}
            width="22"
            type="asset"
          ></Image>
          {children}
        </button>

        <div className="share-widget">
          <div className="share-item fb-share">
            <FacebookShareButton
              url={shareUrl}
              title={title}
              className="share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div className="share-item tw-share">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div className="share-item lin-share">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Share);
