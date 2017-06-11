import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import './InputUrl.scss';

export default class InputUrl extends Component {

  constructor(props) {
    super(props);
    this.submitUrl = this.submitUrl.bind(this);
  }

  submitUrl(e) {
    e.preventDefault();

    // Add http protocol if missing.
    if (!/^https?:\/\//i.test(this.input.value)) {
      this.input.value = 'http://' + this.input.value;
    }

    this.props.onSubmit(this.input.value)
  }

  render() {
    return (
      <div className="inputUrl">
        <div className="container">
          <div className="logo">
            <Image publicId="icon-logo.svg" width="70" type="asset"></Image>
          </div>
          <h1>
            {this.context.t('PageTitleA')}
            <span> {this.context.t('PageTitleB')}</span>
          </h1>
          <p>{this.context.t('ToolDescription')}</p>
          <form onSubmit={this.submitUrl} autoComplete="on">
            <input
              type="text"
              name="testid"
              placeholder={this.context.t('EditBoxDefaultText')}
              ref={(input) => this.input = input}
              autoComplete="on"
            />
            <button type="submit">
              {this.context.t('ButtonText')}
              <Image publicId="icon-arrow-white.svg" width="21" type="asset"></Image>
            </button>
          </form>
          <div className="integrated">
            {this.context.t("IntegratedWith")}
            <a href="https://www.webpagetest.org/" target="_blank" className="icon">
              <Image publicId="https://nullvoid.org/jason.khanlar/assets/img/logos/webpagetest-logo.png" type="fetch" width="107">
                <Transformation width="107" crop="scale" />
              </Image>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

InputUrl.contextTypes = {
  t: React.PropTypes.func.isRequired
}
