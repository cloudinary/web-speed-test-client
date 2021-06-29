import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';

import './ImageInfo.scss';

class ImageInfo extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    original: PropTypes.object,
    isOriginal: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: false,
      formatSupported: true,
    };
    this.getFormat = this.getFormat.bind(this);
    this.imageError = this.imageError.bind(this);
  }

  // Returns the transformed format (file type)
  // or undefined if no format manipulation is needed.
  // Turns jxr -> wdp
  getFormat() {
    const {
      image,
      image: {
        analyze: {
          data: { format },
        },
      },
    } = this.props;

    if (image.transformation && image.transformation.includes('f_')) {
      if (format === 'jxr') {
        return 'wdp';
      } else {
        return format;
      }
    }

    return undefined;
  }

  getFlags() {
    const { image } = this.props;
    if (image.transformation && image.transformation.includes('fl_')) {
      return /fl_([^,/]+)/.exec(image.transformation)[1];
    } else {
      return undefined;
    }
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
      case 'avif':
        browsers = ['Google Chrome', 'Firefox', 'Opera'];
        break;
      case 'jp2':
        browsers = ['Google Chrome', 'Firefox', 'Opera'];
        break;

      default:
        browsers = [
          'Google Chrome',
          'Microsoft Edge',
          'Firefox',
          'Internet Explorer',
          'Opera',
          'Safari',
        ];
        break;
    }
    return browsers;
  }

  imageError() {
    if (this.state.formatSupported && this.image.state.url) {
      this.image.element.src = this.image.state.url.replace(
        'f_' + this.image.props.fetchFormat,
        'f_auto'
      );
      this.setState({ formatSupported: false });
    }
  }

  render() {
    const {
      image,
      original,
      isOriginal,
      image: {
        analyze: { data, explanation, grading },
      },
    } = this.props;

    const format = this.getFormat();
    const flags = this.getFlags();

    return (
      <div className="imageInfo">
        <div className="image-info-bar">
          <div className="browsers">
            {this.getBrowsersSupport(data.format).map((browser, key) => (
              <Image
                key={key}
                publicId={'browser-' + browser + '-blue-v2.svg'}
                type="asset"
              ></Image>
            ))}
          </div>
          {original && original.hasOwnProperty('public_id') && (
            <div className="links">
              <a
                target="_blank"
                rel="noreferrer"
                title={this.props.t('Open image in a new tab')}
                href={image.url}
              >
                <Image
                  publicId="icon-external-black.svg"
                  type="asset"
                  width="16"
                ></Image>
              </a>
              <a
                download={
                  original.public_id + '.' + this.getFormat(data.format)
                }
                target="_blank"
                rel="noreferrer"
                title={this.props.t('Download the image')}
                href={image.url}
              >
                <Image
                  publicId="icon-download-black.svg"
                  type="asset"
                  width="16"
                ></Image>
              </a>
            </div>
          )}
          {isOriginal && (
            <div className="links">
              <a
                target="_blank"
                rel="noreferrer"
                title={this.props.t('Open image in a new tab')}
                href={image.url}
              >
                <Image
                  publicId="icon-external-black.svg"
                  type="asset"
                  width="16"
                ></Image>
              </a>
            </div>
          )}
        </div>

        <div className="image-info-bar">
          <div className="dimensions">
            {image.width} x {image.height}
          </div>
          {!isOriginal && (
            <div className="percent">
              {numbro(image.percentChange / 100).format('0.0%') + ' ' +this.props.t('Reduction')}
            </div>
          )}
          <div className="weight">{numbro(data.bytes).format('0.0 d')}</div>
        </div>

        {isOriginal && grading && (
          <div className="grading">
            <div className="list">
              {Object.keys(grading).map((grade, key) => (
                <div className={grade.toLowerCase()} key={key}>
                  <div
                    className={
                      'original-image-grading grade grade-' +
                      grading[grade].value
                    }
                  >
                    {grading[grade].value}
                  </div>
                  {this.props.t('ImageProperty_' + grade)}
                </div>
              ))}
            </div>
            <div className="bracket">
              <div className="b-top"></div>
              <div className="b-center"></div>
              <div className="b-bottom"></div>
            </div>
            <div className="total">
              <span className="average">
                {this.props.t('GradesToAverageConnection')}
              </span>
              <div className={'grade grade-' + grading.aggregated.value}>
                {grading.aggregated.value}
              </div>
            </div>
          </div>
        )}

        {original && original.hasOwnProperty('public_id') && (
          <div className="transform-image">
            {!this.state.formatSupported && (
              <div className="support">
                {this.props.t('{f} is not supported in your browser', {
                  f: this.props.t(data.format),
                })}
              </div>
            )}
            <Image
              publicId={original.public_id}
              flags={flags}
              fetchFormat={format}
              crop="limit"
              height="300"
              width="400"
              quality="auto"
              dpr="auto"
              ref={(image) => {
                this.image = image;
              }}
              onError={this.imageError}
            ></Image>
          </div>
        )}

        {explanation && explanation.length > 0 && (
          <div className="explanation">
            {explanation.map((explain, key) => (
              <p key={key}>{explain}</p>
            ))}
          </div>
        )}

        {isOriginal && grading && (
          <div className="explanation">
            {Object.keys(grading).map((grade, key) => (
              <p key={key}>{grading[grade].explanation}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(ImageInfo);
