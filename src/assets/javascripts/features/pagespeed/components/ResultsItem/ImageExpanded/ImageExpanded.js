import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import numbro from 'numbro';
import classnames from 'classnames';

import './ImageExpanded.scss';

export default class ImageExpanded extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;
    return (
      <div className="imageExpanded">
        <div className="image-details original">
          <div className="title">
            {this.context.t('ExpandedTabOriginal')}
          </div>
        </div>
        <div className="image-details transformed">
          <div className="title">
            {this.context.t('ExpandedTabSameFormat')}
          </div>
        </div>
        <div className="image-details dynamic">
          <div className="title">
            {this.context.t('ExpandedTabOtherFormats')}
          </div>
        </div>
      </div>
    );
  }
}

ImageExpanded.contextTypes = {
  t: React.PropTypes.func.isRequired
}
