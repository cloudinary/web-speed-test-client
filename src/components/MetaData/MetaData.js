import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import MetaTags from "react-meta-tags";

class MetaData extends Component {
  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const {
      result: {
        resultSumm: { url },
      },
    } = this.props;
    if (url) {
      return (
        <MetaTags>
          <title>{this.props.t("meta_title")}</title>
          <meta property="og:url" id="meta-og-url" content={url} />
          <meta
            property="og:title"
            id="meta-og-title"
            content={this.props.t("meta_results_title") + " " + url}
          />
          <meta
            property="og:site_name"
            id="meta-og-site_name"
            content={this.props.t("meta_results_title") + " " + url}
          />
          <meta
            property="og:description"
            id="meta-og-description"
            content={
              this.props.t("meta_social_description") +
              " " +
              this.props.t("meta_results_social_description") +
              " " +
              url
            }
          />
          <meta
            property="og:type"
            id="meta-og-type"
            content={this.props.t("meta_social_type")}
          />
          <meta
            itemProp="name"
            id="meta-name"
            content={this.props.t("meta_results_title") + " " + url}
          />
          <meta
            itemProp="description"
            id="meta-description"
            content={
              this.props.t("meta_social_description") +
              " " +
              this.props.t("meta_results_social_description") +
              " " +
              url
            }
          />
          <meta
            property="og:image"
            id="meta-og-image"
            content={this.props.t("meta_social_image")}
          />
          <meta
            itemProp="image"
            id="meta-image"
            content={this.props.t("meta_social_image")}
          />
        </MetaTags>
      );
    } else {
      return (
        <MetaTags>
          <title>{this.props.t("meta_title")}</title>
          <meta
            property="og:url"
            id="meta-og-url"
            content={this.props.t("meta_social_url")}
          />
          <meta
            property="og:title"
            id="meta-og-title"
            content={this.props.t("meta_social_title")}
          />
          <meta
            property="og:site_name"
            id="meta-og-site_name"
            content={this.props.t("meta_social_site_name")}
          />
          <meta
            property="og:description"
            id="meta-og-description"
            content={this.props.t("meta_social_description")}
          />
          <meta
            property="og:type"
            id="meta-og-type"
            content={this.props.t("meta_social_type")}
          />
          <meta
            itemProp="name"
            id="meta-name"
            content={this.props.t("meta_social_site_name")}
          />
          <meta
            itemProp="description"
            id="meta-description"
            content={this.props.t("meta_social_description")}
          />
          <meta
            property="og:image"
            id="meta-og-image"
            content={this.props.t("meta_social_image")}
          />
          <meta
            itemProp="image"
            id="meta-image"
            content={this.props.t("meta_social_image")}
          />
        </MetaTags>
      );
    }
  }
}

export default withTranslation()(MetaData);
