import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ResultsItem from '../ResultsItem/ResultsItem';

import './ResultsList.scss';

export default class ResultsList extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  };

  render() {
    const { results } = this.props;
    return (
      <div className="resultsList">
        <div className="container">
          <h1>{this.context.t("Image Analysis Results")}</h1>
        </div>
        <div className="results">
          <div className="container">
            {results && results.length > 0 &&
              results.map((result, key) => (
                <ResultsItem result={result} key={key} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

ResultsList.contextTypes = {
  t: React.PropTypes.func.isRequired
}
