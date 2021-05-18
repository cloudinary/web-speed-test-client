import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ResultsItem from "../ResultsItem/ResultsItem";

import "./ResultsList.scss";

class ResultsList extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  };

  render() {
    const { results } = this.props;
    return (
      <div className="resultsList">
        <div className="results">
          <div className="container">
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
