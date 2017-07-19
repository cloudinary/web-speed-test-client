import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import './Error.scss';

export default class Error extends Component {

  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <Image publicId="icon-error.svg" width="100" type="asset"></Image>
        <h2>{this.context.t('error_' + error + '_header')}</h2>
        <h3>{this.context.t('error_' + error + '_subtitle')}</h3>
        <p>{this.context.t('error_' + error + '_content')}</p>
      </div>
    )
  }
}

Error.contextTypes = {
  t: React.PropTypes.func.isRequired
}
