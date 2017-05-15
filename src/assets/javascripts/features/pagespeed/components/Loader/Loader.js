import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import './Loader.scss';

export default class Loader extends Component {

  componentDidMount() {
    this.animateEllipsis();
  }

  componentWillUnmount() {
    clearInterval(this.loaderInterval);
  }

  animateEllipsis() {
    const ellipsis = this.refs.ellipsis;
    this.loaderInterval = setInterval( function() {
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
