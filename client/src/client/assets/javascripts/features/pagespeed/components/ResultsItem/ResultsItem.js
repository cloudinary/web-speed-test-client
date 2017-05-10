import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './ResultsItem.scss';

export default class ResultsItem extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;

    return (
      <div className="resultsItem">
        <a href={result.secure_url} target="_blank">{result.original_filename + '.' + result.format}</a>
      </div>
    );
  }
}
