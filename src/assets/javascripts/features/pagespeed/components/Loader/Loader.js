import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
// const loaderHtml = `<div>HTML</div>`;

import './Loader.scss';

export default class Loader extends Component {

  componentDidMount() {
    // this.injectLoaderHtml();
    this.animateEllipsis();
  }

  // injectLoaderHtml() {
  //   const iframe = this.refs.iframe;
  //   const document = iframe.contentDocument;
  //   document.body.innerHTML = loaderHtml;
  // }

  animateEllipsis() {
    const ellipsis = this.refs.ellipsis;
    window.setInterval( function() {
      if ( ellipsis.innerHTML.length > 3 )
          ellipsis.innerHTML = "";
      else
          ellipsis.innerHTML += ".";
    }, 500);
  }

  render() {
    return (
      <div className="loader">
        <Image publicId="scan_animation.gif.gif" type="asset"></Image>
        <h2>{this.context.t('Loading')}<span ref="ellipsis" /></h2>
      </div>
    )
  }
}

Loader.contextTypes = {
  t: React.PropTypes.func.isRequired
}
