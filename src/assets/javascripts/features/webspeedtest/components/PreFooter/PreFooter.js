import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import ContactForm from '../ContactForm/ContactForm';
import './PreFooter.scss';

export default class PreFooter extends Component {
  render() {
    return (
      <section className="preFooter">
        <h1>{this.context.t('FooterTitle')}</h1>
        <p>{this.context.t('FooterText')}</p>
        <a className="link-box" href="https://res.cloudinary.com/demo/image/upload/h_210/f_auto,q_auto/paint.jpg" target="_blank">
          https://res.cloudinary.com/demo/image/upload/
          <span className="color-orange">h_210</span>/
          <span className="color-blue">f_auto,q_auto</span>
          /paint.jpg
        </a>
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
            <img src="https://res.cloudinary.com/demo/image/upload/c_fill,g_west,h_210,w_185/paint.jpg" alt="Original image"/>
          </div>
          <div className="dynamic-image">
            <img src="https://res.cloudinary.com/demo/image/upload/c_fill,f_auto,g_east,h_210,q_auto,w_185/paint.jpg" alt="Optimised image"/>
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

        <ContactForm />

      </section>
    );
  }
}

PreFooter.contextTypes = {
  t: React.PropTypes.func.isRequired
}
