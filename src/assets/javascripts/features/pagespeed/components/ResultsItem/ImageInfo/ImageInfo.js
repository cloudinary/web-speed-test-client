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
        <div className="image-info-bar">
          <div className="browsers">
            {this.getBrowsersSupport(data.format).map((browser, key) => (
              <Image key={key} publicId={'browser-' + browser + '.svg.svg'} type="asset"></Image>
            ))}
          </div>
          {this.state.imageUrl && original.public_id &&
            <div className="links">
              <a target="_blank" title={this.context.t('Open image in a new tab')} href={this.state.imageUrl}><Image publicId="icon-external.svg.svg" type="asset" width="16"></Image></a>
              <a download={original.public_id + '.' + this.getFormat(data.format)} target="_blank" title={this.context.t('Download the image')} href={this.state.imageUrl}><Image publicId="icon-download.svg.svg" type="asset" width="16"></Image></a>
            </div>
          }
        </div>

        <div className="image-info-bar">
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
            <div className="list">
              {Object.keys(grading).map((grade, key) => (
                <div key={key}>
                  <div className={'original-image-grading grade grade-' + grading[grade].value}>
                    {grading[grade].value}
                  </div>
                  {this.context.t('ImageProperty_' + grade)}
                </div>
              ))}
            </div>
            <div className="bracket">
              <div className="b-top"></div>
              <div className="b-center"></div>
              <div className="b-bottom"></div>
            </div>
            <div className="total">
              <span className="average">{this.context.t('GradesToAverageConnection')}</span>
              <div className={'grade grade-' + grading.aggregated.value}>
                {grading.aggregated.value}
              </div>
            </div>
          </div>
        }

        {original && original.hasOwnProperty("public_id") &&
          <div className="transform-image">
            <Image
              publicId={original.public_id + '.' + this.getFormat(data.format)}
              crop="lpad"
              height="300"
              width="400"
              background="auto:predominant"
              crop="lpad"
              ref={(image) => { this.image = image; }}
            ></Image>
          </div>
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