import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import Integrated from '../Inegrated/Integrated';
import wdtLoading from './wdtLoading.js';
import './wdtLoading.css';
import './Loader.scss';

// Phrase rotator delay.
const delay = 10000;

class Loader extends Component {
  componentDidMount() {
    wdtLoading.start({
      speed: delay,
      loop: false
    });
  }

  componentWillUnmount() {
    wdtLoading.done();
  }

  getPhrases() {
    let phrases = [],
      i = 0;
    // if we have url - the test was initiated from our front page.
    // if it's undefined - the user came from WPT.
    const tKey = this.props.url ? 'loadingPhrase' : 'loadingWPTPhrase';
    while (this.props.t(tKey + i) !== tKey + i) {
      phrases.push(this.props.t(tKey + i));
      ++i;
    }
    return phrases;
  }

  getExplanation() {
    let explanation = '';
    const tKey = this.props.url ? 'loaderExplanation' : 'loaderWPTExplanation';
    if (this.props.t(tKey) !== tKey) {
      explanation = this.props.t(tKey);
    }
    return explanation;
  }

  render() {
    const phrases = this.getPhrases();
    const explanation = this.getExplanation();
    const heroImage =
      'https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1774326617/webspeed-hero.png';

    return (
      <div className="loader">
        <div className="container">
          <div className="loader-copy">
            <div className="loader-kicker">{this.props.t('AppName')}</div>
            <div className="copy-block">
              <h2>{this.props.t('loaderTitle')}...</h2>
              {explanation !== '' && (
                <p className="loader-explanation">{explanation}</p>
              )}
            </div>
            <div className="loader-status">
              <div className="wdt-loading-screen">
                <div className="wdt-loading-phrases">
                  <div
                    className="wdt-loading-phrase-category"
                    data-category="default"
                  >
                    {phrases.map((phrase, i) => (
                      <div key={i} className="wdt-loading-phrase">
                        {phrase}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Integrated />
          </div>
          <div className="loader-visual">
            <img
              className="loader-image"
              src={heroImage}
              alt="Website image analysis preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Loader);
