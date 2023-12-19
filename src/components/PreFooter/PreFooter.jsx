import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './PreFooter.scss';

class PreFooter extends Component {
  render() {
    return (
      <section className="preFooter">
        <h1>{this.props.t('FooterTitle')}</h1>
        <p>{this.props.t('FooterText')}</p>
        <a
          className="link-box"
          href="https://res.cloudinary.com/demo/image/upload/h_210/f_auto,q_auto/paint.jpg"
          target="_blank"
          rel="noreferrer"
        >
          https://res.cloudinary.com/demo/image/upload/
          <span className="color-orange">h_210</span>/
          <span className="color-blue">f_auto,q_auto</span>
          /paint.jpg
        </a>
        <div className="compare-images">
          <div className="original">
            <div className="label">{this.props.t('FooterOriginalTitle')}</div>
            <div className="format">
              {this.props.t('FooterOriginalImageFormat')}
            </div>
            <div className="dimensions">
              {this.props.t('FooterOriginalImageDimensions')}
            </div>
            <div className="weight">
              {this.props.t('FooterOriginalImageWeight')}
            </div>
          </div>
          <div className="original-image">
            <img
              src="https://res.cloudinary.com/demo/image/upload/c_fill,g_west,h_210,w_185/paint.jpg"
              alt="Original"
            />
          </div>
          <div className="dynamic-image">
            <img
              src="https://res.cloudinary.com/demo/image/upload/c_fill,f_auto,g_east,h_210,q_auto,w_185/paint.jpg"
              alt="Optimised"
            />
          </div>
          <div className="dynamic">
            <div className="label">{this.props.t('FooterCompressedTitle')}</div>
            <div className="format">
              {this.props.t('FooterCompressedImageFormat')}
            </div>
            <div className="dimensions">
              {this.props.t('FooterCompressedImageDimensions')}
            </div>
            <div className="weight">
              {this.props.t('FooterCompressedImageWeight')}
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
