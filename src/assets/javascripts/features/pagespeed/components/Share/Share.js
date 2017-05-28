import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import classnames from 'classnames';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

import './Share.scss';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

export default class Share extends Component {
  static propTypes = {
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
    this.setState({expanded: !this.state.expanded})
  }

  render() {

    const shareCls = classnames(
      'share',
      { 'expanded': this.state.expanded }
    );

    const { shareUrl, title, children } = this.props;

    return (
      <div className={shareCls}>

        <button className="share-toggle" onClick={this.toggleShareWidget}>
          <Image publicId="icon-share.svg.svg" width="18" type="asset"></Image>
          {children}
        </button>

        <div className="share-widget">
          <div className="share-item fb-share">
            <FacebookShareButton
              url={shareUrl}
              title={title}
              className="share-button">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <FacebookShareCount
              url={shareUrl}
              className="share-count">
              {count => count}
            </FacebookShareCount>
          </div>

          <div className="share-item tw-share">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          </div>

          <div className="share-item gplus-share">
            <GooglePlusShareButton
              url={shareUrl}
              className="share-button">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>

            <GooglePlusShareCount
              url={shareUrl}
              className="share-count">
              {count => count}
            </GooglePlusShareCount>
          </div>

          <div className="share-item lin-share">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="share-button">
              <LinkedinIcon
                size={32}
                round />
            </LinkedinShareButton>

            <LinkedinShareCount
              url={shareUrl}
              className="share-count">
              {count => count}
            </LinkedinShareCount>
          </div>

        </div>
      </div>
    );
  }
}

Share.contextTypes = {
  t: React.PropTypes.func.isRequired
}
