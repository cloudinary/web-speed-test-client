import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Image } from "cloudinary-react";
import "./Error.scss";

class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <Image publicId="icon-error.svg" width="100" type="asset"></Image>
        <h2>{this.props.t("error_" + error + "_header")}</h2>
        <h3>{this.props.t("error_" + error + "_subtitle")}</h3>
        <p>{this.props.t("error_" + error + "_content")}</p>
      </div>
    );
  }
}

export default withTranslation()(Error);
