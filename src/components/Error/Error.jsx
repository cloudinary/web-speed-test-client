import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Integrated from '../Inegrated/Integrated';

import './Error.scss';

class Error extends Component {
  render() {
    const { error } = this.props;
    const heroImage =
      'https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1774326617/webspeed-hero.png';

    return (
      <div className="error">
        <div className="container">
          <div className="error-copy">
            <div className="error-kicker">{this.props.t('AppName')}</div>
            <div className="copy-block">
              <h2>{this.props.t('error_generic_header')}</h2>
              <div className="error-message">
                <p>{this.props.t('error_generic_subtitle')}</p>
                {error && <div className="error-detail">{error}</div>}
                <strong>{this.props.t('error_contact_message')}</strong>
              </div>
            </div>
            <Integrated />
          </div>
          <div className="error-visual">
            <img
              className="error-image"
              src={heroImage}
              alt="Website image analysis preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Error);
