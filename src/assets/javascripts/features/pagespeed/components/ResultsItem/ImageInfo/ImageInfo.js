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
        <div className="browsers">BROWSERS</div>
        <div className="links">LINKS</div>
        <div className="dimensions">{image.width} x {image.height}</div>
        <div className="percent">
          {isOriginal !== true &&
            numbro(0.521).format('0.0%')
          }
        </div>
        <div className="weight">
          {numbro(image.analyze.data.bytes).format('0.0d')}
        </div>

        {image.analyze.explanation &&
          image.analyze.explanation.map((explain, key) => (
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
