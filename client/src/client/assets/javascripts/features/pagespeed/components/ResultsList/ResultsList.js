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
        {results && results.length > 0 &&
          results.map((result, key) => (
            <ResultsItem result={result} key={key} />
          ))
        }
      </div>
    );
  }
}
