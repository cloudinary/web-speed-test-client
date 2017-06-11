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
      expanded: props.expanded || false,
      carousel: props.carousel || 1
    };
    this.toggleDynamic = this.toggleDynamic.bind(this);
    this.mobileCarousel = this.mobileCarousel.bind(this);
  }

  toggleDynamic() {
    this.setState({expanded: !this.state.expanded})
  }

  mobileCarousel(dir) {
    const slides = 3;
    let currSlide = this.state.carousel;
    if (dir == 'next' && currSlide < slides) {
      this.setState({carousel: this.state.carousel + 1})
    }
    else if (dir == 'prev' && currSlide > 1) {
      this.setState({carousel: this.state.carousel - 1})
    }
  }

  render() {
    const { result } = this.props;

    const imageExpandedCls = classnames(
      'imageExpanded',
      'carousel-' + this.state.carousel,
      {'dynamicIn': this.state.expanded}
    );

    return (
      <div className={imageExpandedCls}>
        <button className="image-info-expand" onClick={this.toggleDynamic}>
          <Image publicId="icon-expand-b.svg" type="asset" width="20"></Image>
        </button>
        <button className="mobile-carousel-btn prev" onClick={() => this.mobileCarousel('prev')}>
          <Image publicId="icon-expand-b.svg" type="asset" width="20"></Image>
        </button>
        <button className="mobile-carousel-btn next" onClick={() => this.mobileCarousel('next')}>
          <Image publicId="icon-expand-b.svg" type="asset" width="20"></Image>
        </button>
        <div className="image-details original">
          <div className="title">
            <Image className="image-info-icon" publicId="icon-original.svg" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabOriginal')}
          </div>
          <div className="tab">
            {this.context.t(result.format)}
          </div>
          <ImageInfo image={result} isOriginal={true} />
        </div>
        <div className="image-details transformed">
          <div className="title">
            <Image className="image-info-icon" publicId="icon-transformed.png" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabSameFormat')}
          </div>
          <div className="tab">
            {this.context.t(result.transformedImage.analyze.data.format)}
          </div>
          <ImageInfo image={result.transformedImage} original={result} />
        </div>
        <div className="image-details dynamic">
          <div className="title">
            <Image className="image-info-icon" publicId="icon-dynamic.svg" type="asset" width="25"></Image>
            {this.context.t('ExpandedTabOtherFormats')}
          </div>
          <Tabs>
            <TabList>
              {result.dynamicFormats.map((format, key) => (
                <Tab key={key}>{this.context.t(format.analyze.data.format)}</Tab>
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
