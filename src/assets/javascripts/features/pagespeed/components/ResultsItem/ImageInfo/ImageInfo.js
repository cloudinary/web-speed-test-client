import React, { Component, PropTypes } from 'react';
import numbro from 'numbro';

import './ImageInfo.scss';

export default class ImageInfo extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    original: PropTypes.object,
    isOriginal: PropTypes.bool
  };

  render() {
    const { image, original, isOriginal } = this.props;
    return (
      <div className="imageInfo">
        {isOriginal !== true &&
          numbro(0.521).format('0.0%')
        }
        {numbro(image.data.bytes).format('0.0d')}

        {image.explanation &&
          image.explanation.map((explain, key) => (
            <p key={key}>{explain}</p>
          ))
        }
      </div>
    );
  }
}

ImageInfo.contextTypes = {
  t: React.PropTypes.func.isRequired
}
