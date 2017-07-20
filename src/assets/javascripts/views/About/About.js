import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDisqusComments from 'react-disqus-comments';

import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div className="about static-page container">
        <h1>About Cloudinary Website Speed Test</h1>
        <hr />

        <p>Website Speed Test analyzes a website&#39;s images and provides a ranking for a variety of image aspects and categories. Using a grade range of A-F, it rates the image format, fit, compression rate, color space and color depth.</p>
        <p>Along with the ranking, the Website Speed Test tool provides measurable and actionable information about how to go beyond simple compression to optimize web performance. Users can discover how changes to image size, format selection, quality and encoding parameters to drastically improve their web page&#39;s load speed.</p>
        <p>The Website Speed Test image analysis tool is integrated with <a href="https://www.webpagetest.org/">WebPagetest</a>. With this integration, <a href="http://cloudinary.com/">Cloudinary</a> powers WebPagetest with robust image analysis capabilities, enabling users to see and understand the problems related to images on their pages. Users receive valuable information on how to manage those images so they can deliver an optimal user experience.</p>
        <p>You can use the tool in two ways:</p>
        <ul>
          <li>From WebPagetest: Run the test in <a href="https://www.webpagetest.org/">WebPagetest</a> and in the results page, click the Image Analysis tab.</li>
          <li>From Website Speed Test: Go directly to <a href="https://webspeedtest.cloudinary.com/">Website Speed Test</a> and enter the URL for the web page you want to analyze.</li>
        </ul>
        <h2>Website Speed Test FAQ</h2>
        <h3>The report doesn&#39;t seem to be showing all the images in my web page</h3>
        <ul>
          <li>We analyze only images that are defined in the web page as &lt;IMG&gt; elements.</li>
          <li>We analyze all background-image images except for ones with background-repeat round.</li>
          <li>We limit the analysis to the 50 images with the highest resolution (pixel width X height) in the web page.</li>
        </ul>
        <h3>How do you calculate the image&#39;s average score?</h3>
        <p>The image average score is calculated by the average values of the format, fit and compression scores. Based on our research, the other image criteria (Color Space, Color Depth and Metadata) will affect the first 3 criteria and in addition, their effect on the overall performance is limited compared to the first 3 criteria. Therefore, we decided not to take the 3 last criteria into account in the image&#39;s average score.</p>
        <h3>How do you calculate the Page Image Score?</h3>
        <p>The Page Image Score is the average value of the scores for all analyzed images.</p>
        <h3>What information is presented in the image&#39;s expanded view?</h3>
        <h4>Left Tab – Current Image</h4>
        <p>Presents the website&#39;s current image along with the image grade.</p>
        <h4>Middle Tab – Optimized Image</h4>
        <p>This shows an optimized image using the original image format. This optimization is achieved by scaling the image down to the actual required dimension in the web page and by adjusting the quality compression using Cloudinary&#39;s <a href="http://cloudinary.com/documentation/image_transformations#automatic_quality_and_encoding_settings">q_auto algorithm</a></p>
        <h4>Right Tab - Format Alternatives</h4>
        <p>This shows the same &nbsp;optimized image in different formats. Recently, modern image formats, such as WebP and JPEG-XR, have been introduced, providing smaller images that often have better quality. The problem with these formats is that they are not supported by all web browsers. WebP is supported by Chrome and Opera, while JPEG-XR is supported by Explorer and Edge.</p>
        <h3>Can I use the optimized images?</h3>
        <p>Sure! For every optimized image, you will find a download button. As long as the original image was yours and the image license permits it, feel free to download the optimized version of the image and use it. (Please refer to the service <a href="http://webspeedtest-staging.cloudinary.com/tos">Terms of Service</a>&nbsp;for full details.</p>

        <ReactDisqusComments
            shortname="website-speed-test"
            identifier="about"
            url="https://webspeedtest.cloudinary.com/about" />

        <p>
          <Link to="/">Back Home</Link>
        </p>

      </div>
    );
  }
}

About.contextTypes = {
  t: React.PropTypes.func.isRequired
}
