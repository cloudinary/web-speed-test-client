import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './ImageExpanded.scss';

export default class ImageExpanded extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;
    return (
      <div className="imageExpanded">
        <div className="image-details original">
          <div className="title">
            {this.context.t('ExpandedTabOriginal')}
          </div>
          <div className="tab">
            {result.format}
          </div>
        </div>
        <div className="image-details transformed">
          <div className="title">
            {this.context.t('ExpandedTabSameFormat')}
          </div>
          <div className="tab">
            {result.transformedImage.analyze.data.format}
          </div>
        </div>
        <div className="image-details dynamic">
          <div className="title">
            {this.context.t('ExpandedTabOtherFormats')}
          </div>
          <Tabs>
            <TabList>
              {result.dynamicFormats.map((format, key) => (
                <Tab key={key}>{format.analyze.data.format}</Tab>
              ))}
            </TabList>
            {result.dynamicFormats.map((format, key) => (
              <TabPanel key={key}>{format.analyze.data.format}</TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

ImageExpanded.contextTypes = {
  t: React.PropTypes.func.isRequired
}
