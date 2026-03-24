import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Integrated from '../Inegrated/Integrated';

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
    const heroImage =
      'https://cloudinary-marketing-res.cloudinary.com/image/upload/f_auto,q_auto/v1774326617/webspeed-hero.png';

    return (
      <div className="inputUrl">
        <div className="container">
          <div className="hero-copy">
            <div className="copy-block">
              <h1>{this.props.t('AppName')}</h1>
              <p>{this.props.t('ToolDescription')}</p>
            </div>
            <form onSubmit={this.submitUrl} autoComplete="on">
              <div className="input-row">
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
              </div>
              {!this.state.validUrl && (
                <div className="validation">
                  {this.props.t('Please enter a valid URL.')}
                </div>
              )}
            </form>
            <Integrated />
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src={heroImage}
              alt="Website image analysis preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(InputUrl);
