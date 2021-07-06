import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';

import './InputUrl.scss';

class InputUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validUrl: true
    };
    this.validateUrl = this.validateUrl.bind(this);
    this.submitUrl = this.submitUrl.bind(this);
  }

  validateUrl() {
    const pattern =
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

    if (!pattern.test(this.input.value)) {
      return false;
    } else {
      if (!this.state.validUrl) {
        this.setState({ validUrl: true });
      }
      return true;
    }
  }

  submitUrl(e) {
    e.preventDefault();

    // Add http protocol if missing.
    if (!/^https?:\/\//i.test(this.input.value)) {
      this.input.value = 'http://' + this.input.value;
    }

    if (this.validateUrl()) {
      this.props.onSubmit(this.input.value);
    } else if (this.state.validUrl) {
      this.setState({ validUrl: false });
    }
  }

  render() {
    return (
      <div className="inputUrl">
        <div className="container">
          <div className="logo">
            <Image publicId="icon-logo-v2.svg" width="90" type="asset"></Image>
          </div>
          <h1>{this.props.t('AppName')}</h1>
          <form onSubmit={this.submitUrl} autoComplete="on">
            <input
              type="text"
              name="testid"
              placeholder={this.props.t('EditBoxDefaultText')}
              ref={(input) => (this.input = input)}
              onChange={this.validateUrl}
              autoComplete="on"
            />
            <button className="btn btn-large" type="submit">
              {this.props.t('ButtonText')}
            </button>
            {!this.state.validUrl && (
              <div className="validation">
                {this.props.t('Please enter a valid URL.')}
              </div>
            )}
          </form>
          <p>{this.props.t('ToolDescription')}</p>
          <div className="integrated">
            {this.props.t('IntegratedWith') + ':'}
            <a
              href="https://www.webpagetest.org/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <Image
                publicId="webpagetest-logo-new.svg"
                type="asset"
                width="150"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(InputUrl);
