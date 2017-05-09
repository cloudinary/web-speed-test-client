import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './PagespeedListItem.scss';

export default class PagespeedListItem extends Component {
  static propTypes = {
    deletePagespeed: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starPagespeed: PropTypes.func.isRequired,
    starred: PropTypes.bool
  };

  render() {
    return (
      <li className="pagespeedListItem">
        <div className="pagespeedInfos">
          <div><span>{this.props.name}</span></div>
        <div><small>xx pagespeed in common</small></div>
        </div>
        <div className="pagespeedActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.starPagespeed(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.deletePagespeed(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}
