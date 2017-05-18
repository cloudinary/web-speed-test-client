import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import numbro from 'numbro';

import './ImageInfo.scss';

export default class ImageInfo extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    original: PropTypes.object,
    isOriginal: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: false
    };
  }

  componentDidMount() {
    if (this.image) {
      this.setState({
        // Get image URL without transforms.
        imageUrl: this.image.state.url.replace(/upload\/.*\//, 'upload\/')
      });
    }
  }

  getFormat(format) {
    if (format == 'jxr') {
      return 'wdp';
    }
    else {
      return format;
    }
  }

  getBrowsersSupport(format) {
    let browsers = [];
    switch (format) {
      case 'jxr':
        browsers = ['Internet Explorer', 'Microsoft Edge'];
        break;
      case 'webp':
        browsers = ['Google Chrome', 'Opera'];
        break;

      default:
        browsers = ['Google Chrome', 'Microsoft Edge', 'Firefox', 'Internet Explorer', 'Opera', 'Safari'];
        break;
    }
    return browsers;
  }

  render() {
    const {
      image,
      original,
      isOriginal,
      image: { analyze: { data, explanation, grading } }
    } = this.props;

    return (
      <div className="imageInfo">
        <div className="immage-info-bar">
          <div className="browsers">
            {this.getBrowsersSupport(data.format).map((browser, key) => (
              <Image key={key} publicId={'browser-' + browser + '.svg.svg'} type="asset"></Image>
            ))}
          </div>
          {this.state.imageUrl && original.public_id &&
            <div className="links">
              <a target="_blank" title={this.context.t('Open image in a new tab')} href={this.state.imageUrl}><Image publicId="icon-external.svg.svg" type="asset" width="16"></Image></a>
              <a download={original.public_id + '.' + this.getFormat(data.format)} traget="_blank" title={this.context.t('Download the image')} href={this.state.imageUrl}><Image publicId="icon-download.svg.svg" type="asset" width="16"></Image></a>
            </div>
          }
        </div>

        <div className="immage-info-bar">
          <div className="dimensions">{image.width} x {image.height}</div>
          {isOriginal !== true &&
            <div className="percent">
              {numbro(0.521).format('0.0%')}
            </div>
          }
          <div className="weight">
            {numbro(data.bytes).format('0.0d')}
          </div>
        </div>

        {isOriginal == true && grading &&
          <div className="grading">
            {Object.keys(grading).map((grade, key) => (
              <div key={key}>
                <div className={'original-image-grading grade grade-' + grading[grade].value}>
                  {grading[grade].value}
                </div>
                {this.context.t('ImageProperty_' + grade)}
              </div>
            ))}
          </div>
        }

        {original && original.hasOwnProperty("public_id") &&
          <Image
            publicId={original.public_id + '.' + this.getFormat(data.format)}
            crop="lpad"
            height="300"
            width="400"
            background="auto:predominant"
            crop="lpad"
            ref={(image) => { this.image = image; }}
          ></Image>
        }

        {explanation && explanation.length > 0 &&
          <div className="explanation">
            {explanation.map((explain, key) => (
              <p key={key}>{explain}</p>
            ))}
          </div>
        }

        {isOriginal == true && grading &&
          <div className="explanation">
            {Object.keys(grading).map((grade, key) => (
              <p key={key}>{grading[grade].explanation}</p>
            ))}
          </div>
        }
      </div>
    );
  }
}

ImageInfo.contextTypes = {
  t: React.PropTypes.func.isRequired
}
