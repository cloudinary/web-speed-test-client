import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import './PreFooter.scss';

export default class PreFooter extends Component {
  static propTypes = {
  };

  render() {

    return (
      <section className="preFooter">
        <h1>{this.context.t('FooterTitle')}</h1>
        <p>{this.context.t('FooterText')}</p>
        <a className="link-box" href={this.context.t('FooterSampleURL')} target="_blank">{this.context.t('FooterSampleURL')}</a>
        <div className="compare-images">
          <div className="original">
            <div className="label">
              {this.context.t('FooterOriginalTitle')}
            </div>
            <div className="format">
              {this.context.t('FooterOriginalImageFormat')}
            </div>
            <div className="dimensions">
              {this.context.t('FooterOriginalImageDimensions')}
            </div>
            <div className="weight">
              {this.context.t('FooterOriginalImageWeight')}
            </div>
          </div>
          <div className="original-image">
            <Image publicId="paints.jpg.jpg" gravity="west" height="210" width="185" crop="fill" type="asset">
            </Image>
          </div>
          <div className="dynamic-image">
            <Image publicId="paints.jpg.jpg" gravity="east" quality="auto" height="210" width="185" crop="fill" fetch_format="auto" type="asset">
            </Image>
          </div>
          <div className="dynamic">
            <div className="label">
              {this.context.t('FooterCompressedTitle')}
            </div>
            <div className="format">
              {this.context.t('FooterCompressedImageFormat')}
            </div>
            <div className="dimensions">
              {this.context.t('FooterCompressedImageDimensions')}
            </div>
            <div className="weight">
              {this.context.t('FooterCompressedImageWeight')}
            </div>
          </div>
        </div>
        <a className="link-btn" href={this.context.t('TryItNowButtonURL')} target="_blank">{this.context.t('TryItNowButtonText')}</a>
      </section>
    );
  }
}

PreFooter.contextTypes = {
  t: React.PropTypes.func.isRequired
}
