import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ResultsItem from '../ResultsItem/ResultsItem';

import './ResultsList.scss';

class ResultsList extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    withLcp: PropTypes.bool
  };

  render() {
    const { results } = this.props;
    return (
      <div className="resultsList">
        <div className="results">
          <div className="container">
            {this.props.withLcp && <h1>{this.props.t('OtherPageAssets')}</h1>}
            {results &&
              results.length > 0 &&
              results.map((result, key) => (
                <ResultsItem result={result} key={key} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ResultsList);
