import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';
import CompressionBar from '../ResultsItem/CompressionBar/CompressionBar';
import cx from 'classnames';

import './ResultsLCP.scss';

class NonImageLCP extends Component {
  static propTypes = {
    lcp: PropTypes.object.isRequired
  };

  render() {
    const {
      lcp: { event },
      getGrading
    } = this.props;

    const grade = getGrading(event.time);

    return (
      <div className="lcp-item non-image">
        <div className="image-data">
          <div className="image-data-header">
            <div className={'image-data-grading grade grade-' + grade}>
              {grade}
            </div>
            <h3 className="image-data-name" title={event.element.outerHTML}>
              {event.element.outerHTML.split('>')[0] + '>'}
            </h3>
          </div>
          <div className="compressionBar-wrapper">
            <CompressionBar
              format={this.props.t('HtmlCss')}
              size={event.size}
              grade={grade}
            />
          </div>
          <div className="image-loading-time">
            <h3 className="image-loading-time-title">
              {this.props.t('TimeToLoad')}
              <span>{'(' + this.props.t('TimeToLoadShouldBe') + ')'}</span>
            </h3>
            <Image publicId="icon-time_new.svg" type="asset" width="51"></Image>
            <div
              className={cx('image-loading-time-grade', 'time-grade-' + grade)}
            >
              {`${numbro(event.time / 1000).format('3a')}s`}
              <span>{this.props.t('NonImageTimeGrade' + grade)}</span>
            </div>
          </div>
          <div className="lcp-canvas">
            <h3 className="lcp-canvas-title">{this.props.t('LcpCanvas')}</h3>
            <div className="canvas-image-wrapper">
              <span>
                {Math.floor(event.element.boundingRect.width) +
                  ' X ' +
                  Math.floor(event.element.boundingRect.height)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(NonImageLCP);
