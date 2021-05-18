import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>404 :(</h1>
        <hr />
        <p>
          <Link to="/">Back To Home View</Link>
        </p>
      </div>
    );
  }
}
