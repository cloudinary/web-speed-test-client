import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';

import './Integrated.scss';

class Integrated extends Component {
  render() {
    return (
      <div className="integrated">
        {this.props.t('IntegratedWith') + ':'}
        <a
          href="https://www.webpagetest.org/"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <Image publicId="catchpoint-logo.svg" type="upload" width="120" />
        </a>
      </div>
    );
  }
}

export default withTranslation()(Integrated);
