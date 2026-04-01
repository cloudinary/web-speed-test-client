import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './PreFooter.scss';

class PreFooter extends Component {
  render() {
    const sampleUrl =
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/paint.jpg';
    const showcaseImage =
      'https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1775001676/paints.jpg';

    return (
      <section className="preFooter">
        <div className="prefooter-main">
          <div className="prefooter-copy">
            <h1>{this.props.t('FooterTitle')}</h1>
            <p>{this.props.t('FooterText')}</p>
          </div>
          <div className="prefooter-showcase">
            <div className="showcase-frame">
              <img src={showcaseImage} alt="Paint cans" className="showcase-image" />
              <div className="sample-card original-card">
                <div className="label">{this.props.t('FooterOriginalTitle')}</div>
                <div className="sample-meta">
                  <span>{this.props.t('FooterOriginalImageFormat')}</span>
                  <span>{this.props.t('FooterOriginalImageWeight')}</span>
                </div>
              </div>
              <a
                className="sample-url"
                href={this.props.t('FooterSampleURL')}
                target="_blank"
                rel="noreferrer"
              >
                <code>{sampleUrl}</code>
              </a>
              <div className="sample-card dynamic-card">
                <div className="label">{this.props.t('FooterCompressedTitle')}</div>
                <div className="sample-meta">
                  <span>{this.props.t('FooterCompressedImageFormat')}</span>
                  <strong>{this.props.t('FooterCompressedImageWeight')}</strong>
                </div>
              </div>
            </div>
          </div>
          <a
            className="link-btn btn btn-large"
            href={this.props.t('TryItNowButtonURL')}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.t('TryItNowButtonText')}
          </a>
        </div>

        <div className="contact">
          <h1>{this.props.t('ContactTitle')}</h1>
          <p>{this.props.t('ContactText')}</p>
          <a
            className="btn btn-large"
            href="http://cloudinary.com/contact"
            target="_blank"
            rel="noreferrer"
          >
            {this.props.t('ContactLinkText')}
          </a>
        </div>
      </section>
    );
  }
}

export default withTranslation()(PreFooter);
