import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classnames from 'classnames';
import ImageInfo from '../ImageInfo/ImageInfo';

import './ImageExpanded.scss';

export default class ImageExpanded extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded || false
    };
    this.toggleDynamic = this.toggleDynamic.bind(this);
  }

  toggleDynamic() {
    this.setState({expanded: !this.state.expanded})
    console.log(this.state.expanded);
    // console.log(this.toggle);
  }

  render() {
    const { result } = this.props;

    const imageExpandedCls = classnames(
      'imageExpanded',
      {'dynamicIn': this.state.expanded}
    );

    return (
      <div className={imageExpandedCls}>
        <div className="image-details original">
          <div className="title">
            <Image className="image-info-icon" publicId="icon-original.svg.svg" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabOriginal')}
          </div>
          <div className="tab">
            {result.format}
          </div>
          <ImageInfo image={result} isOriginal={true} />
        </div>
        <div className="image-details transformed">
          <div className="title">
            <button className="image-info-expand" onClick={this.toggleDynamic}>
              <Image publicId="icon-expand-b.svg.svg" type="asset" width="20"></Image>
            </button>
            <Image className="image-info-icon" publicId="icon-transformed.png.png" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabSameFormat')}
          </div>
          <div className="tab">
            {result.transformedImage.analyze.data.format}
          </div>
          <ImageInfo image={result.transformedImage} original={result} />
        </div>
        <div className="image-details dynamic">
          <div className="title">
            <Image className="image-info-icon" publicId="icon-dynamic.svg.svg" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabOtherFormats')}
          </div>
          <Tabs>
            <TabList>
              {result.dynamicFormats.map((format, key) => (
                <Tab key={key}>{format.analyze.data.format}</Tab>
              ))}
            </TabList>
            {result.dynamicFormats.map((format, key) => (
              <TabPanel key={key}>
                <ImageInfo image={format} original={result} />
              </TabPanel>
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
