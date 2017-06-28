import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import numbro from 'numbro';
import cloudinary from 'cloudinary-core';

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
      imageUrl: false,
      formatSupported: true
    };
    this.getFormat = this.getFormat.bind(this);
    this.imageError = this.imageError.bind(this);
  }

  // Returns the transformed format (file type)
  // or undefined if no format manipulation is needed.
  // Turns jxr -> wdp
  getFormat() {
    const { image, image: { analyze: { data: { format }}}} = this.props;

    if (image.transformation && image.transformation.includes('f_')) {
      if (format == 'jxr') {
        return 'wdp';
      }
      else {
        return format;
      }
    }

    return undefined;
  }

  getBrowsersSupport(format) {
    let browsers = [];
    switch (format) {
      case 'jxr':
      case 'wdp':
      case 'hdp':
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

  imageError() {
    if (this.state.formatSupported == true) {
      this.image.element.src = this.image.state.url.replace('f_' + this.image.props.fetchFormat, 'f_auto');
      this.setState({ formatSupported: false });
    }
  }

  render() {
    const {
      image,
      original,
      isOriginal,
      image: { analyze: { data, explanation, grading } }
    } = this.props;

    const format = this.getFormat();

    const cloudinaryCore = new cloudinary.Cloudinary({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      cname: process.env.CLOUDINARY_CNAME
    });
    const transform = new cloudinary.Transformation();
    let transformedUrl = '';
    if (isOriginal == true) {
      transformedUrl = cloudinaryCore.url(image.public_id);
    }
    else if (original && original.hasOwnProperty("public_id")) {
      transform.crop('limit').width(image.width).height(image.height).quality("auto");
      if (format) {
        transform.fetchFormat(format);
      }
      transformedUrl = cloudinaryCore.url(original.public_id, transform);
    }

    return (
      <div className="imageInfo">
        <div className="image-info-bar">
          <div className="browsers">
            {this.getBrowsersSupport(data.format).map((browser, key) => (
              <Image key={key} publicId={'browser-' + browser + '.svg'} type="asset"></Image>
            ))}
          </div>
          {original && original.hasOwnProperty("public_id") &&
            <div className="links">
              <a target="_blank" title={this.context.t('Open image in a new tab')} href={transformedUrl}><Image publicId="icon-external.svg" type="asset" width="16"></Image></a>
              <a download={original.public_id + '.' + this.getFormat(data.format)} target="_blank" title={this.context.t('Download the image')} href={transformedUrl}><Image publicId="icon-download.svg" type="asset" width="16"></Image></a>
            </div>
          }
          {isOriginal == true &&
            <div className="links">
              <a target="_blank" title={this.context.t('Open image in a new tab')} href={transformedUrl}><Image publicId="icon-external.svg" type="asset" width="16"></Image></a>
            </div>
          }
        </div>

        <div className="image-info-bar">
          <div className="dimensions">{image.width} x {image.height}</div>
          {isOriginal !== true &&
            <div className="percent">
              {numbro(image.percentChange / 100).format('0.0%')}
            </div>
          }
          <div className="weight">
            {numbro(data.bytes).format('0.0 d')}
          </div>
        </div>

        {isOriginal == true && grading &&
          <div className="grading">
            <div className="list">
              {Object.keys(grading).map((grade, key) => (
                <div className={grade.toLowerCase()} key={key}>
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
            {this.state.formatSupported !== true &&
              <div className="support">{this.context.t('{f} is not supported in your browser', {f: this.context.t(data.format)})}</div>
            }
            <Image
              publicId={original.public_id}
              fetchFormat={format}
              crop="limit"
              height="300"
              width="400"
              quality="auto"
              ref={(image) => { this.image = image; }}
              onError={this.imageError}
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
