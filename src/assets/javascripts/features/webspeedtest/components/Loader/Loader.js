import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import wdtLoading from './wdtLoading.js';
import './wdtLoading.css';
import './Loader.scss';

// Phrase rotator delay.
const delay = 10000;

export default class Loader extends Component {

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
    let phrases = [], i = 0;
    // if we have url - the test was initiated from our front page.
    // if it's undefined - the user came from WPT.
    const tKey = this.props.url ? 'loadingPhrase' : 'loadingWPTPhrase';
    while (this.context.t(tKey + i) !== tKey + i) {
      phrases.push(this.context.t(tKey + i));
      ++i;
    }
    return phrases;
  }

  getExplanation() {
    let explanation = '';
    const tKey = this.props.url ? 'loaderExplanation' : 'loaderWPTExplanation';
    if (this.context.t(tKey) !== tKey) {
      explanation = this.context.t(tKey);
    }
    return explanation;
  }

  render() {
    const { url } = this.props;
    const phrases = this.getPhrases();
    const explanation = this.getExplanation();
    return (
      <div className="loader">
        <div className="container">
          <h2>{this.context.t('loaderTitle')}{url ? ' ' + url : '...'}</h2>
          <Image className="gif" publicId="loader.gif" width="180" type="asset"></Image>
          <div className="col">
            {explanation !== '' &&
              <p className="loader-explanation">{explanation}</p>
            }
            <div className="wdt-loading-screen">
              <div className="wdt-loading-phrases">
                <div className="wdt-loading-phrase-category" data-category="default">
                  {phrases.map((phrase, i) =>
                    <div key={i} className="wdt-loading-phrase">{phrase}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Loader.contextTypes = {
  t: React.PropTypes.func.isRequired
}
