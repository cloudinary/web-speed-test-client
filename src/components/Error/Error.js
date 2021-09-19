import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import Integrated from '../Inegrated/Integrated';

import './Error.scss';

class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <div className="error-image">
          <Image publicId="icon-error-new.svg" width="100" type="asset"></Image>
        </div>
        <h2>{this.props.t('error_generic_header')}</h2>
        <h3>{this.props.t('error_generic_subtitle')}</h3>
        <h4>{error}</h4>
        <p>{this.props.t('error_contact_message')}</p>
        <Integrated />
      </div>
    );
  }
}

export default withTranslation()(Error);
