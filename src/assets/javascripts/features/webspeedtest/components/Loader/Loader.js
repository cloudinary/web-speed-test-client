import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import wdtLoading from './wdtLoading.js';
import './wdtLoading.css';
import './Loader.scss';

export default class Loader extends Component {

  componentDidMount() {
    wdtLoading.start({
      speed: 10000,
      loop: false
    });
  }

  componentWillUnmount() {
    wdtLoading.done();
  }

  getPhrases() {
    let phrases = [], i = 0;
    while (this.context.t('loadingPhrase' + i) !== 'loadingPhrase' + i) {
      phrases.push(this.context.t('loadingPhrase' + i));
      ++i;
    }
    return phrases;
  }

  render() {
    const phrases = this.getPhrases();
    return (
      <div className="loader wdt-loading-screen">
        <div className="wdt-loading-phrases">
          <div className="wdt-loading-phrase-category" data-category="default">
            {phrases.map((phrase, i) =>
              <div key={i} className="wdt-loading-phrase">{phrase}</div>
            )}
          </div>
        </div>
        {this.context.t('loaderExplanation') !== 'loaderExplanation' &&
          <p className="loader-explanation">{this.context.t('loaderExplanation')}</p>
        }
      </div>
    )
  }
}

Loader.contextTypes = {
  t: React.PropTypes.func.isRequired
}
