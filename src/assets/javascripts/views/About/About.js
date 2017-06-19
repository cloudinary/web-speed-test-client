import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div className="static-page container">
        <h1>{this.context.t('About Cloudinary Website Speed Test')}</h1>
        <hr />

<h1><span style="font-weight: 400;">About Cloudinary Website Speed Test</span></h1>
<p><span style="font-weight: 400;">Website Speed Test analyzes a website&rsquo;s images and provides a ranking for a variety of image aspects and categories. Using a grade range of A-F, it rates the image format, fit, compression rate, color space and color depth. </span></p>
<p><span style="font-weight: 400;">Along with the ranking, the Website Speed Test tool provides measurable and actionable information about how to go beyond simple compression to optimize web performance. Users can discover how changes to image size, format selection, quality and encoding parameters to drastically improve their web page's load speed.</span></p>
<p><span style="font-weight: 400;">The Website Speed Test image analysis tool is integrated with </span><a href="https://www.webpagetest.org/"><span style="font-weight: 400;">WebPagetest</span></a><span style="font-weight: 400;">. With this integration, </span><a href="http://cloudinary.com/"><span style="font-weight: 400;">Cloudinary</span></a><span style="font-weight: 400;"> powers WebPagetest with robust image analysis capabilities, enabling users to see and understand the problems related to images on their pages. Users receive valuable information on how to manage those images so they can deliver an optimal user experience.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">You can use the tool in two ways:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">From WebPagetest: Run the test in </span><a href="https://www.webpagetest.org/"><span style="font-weight: 400;">WebPagetest</span></a><span style="font-weight: 400;"> and in the results page, click the </span><strong>Image Analysis</strong><span style="font-weight: 400;"> tab.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">From Website Speed Test: Go directly to </span><a href="https://webspeedtest.cloudinary.com/"><span style="font-weight: 400;">Website Speed Test</span></a><span style="font-weight: 400;"> and enter the URL for the web page you want to analyze. </span></li>
</ul>
<h2><span style="font-weight: 400;">Website Speed Test FAQ</span></h2>
<p>&nbsp;</p>
<p><strong><strong> The report doesn't seem to be showing all the images in my web page</strong></strong></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">We analyze only images that are defined in the web page as &lt;IMG&gt; elements. &nbsp;&nbsp;`background-image` files are included only if &nbsp;`background-repeat` is set to &lsquo;no-repeat&rsquo; (meaning that the background image is not tiled).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">We limit the analysis to the 50 images with the highest resolution (pixel width X height) in the web page.</span></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong><strong>How do you calculate the image&rsquo;s average score?</strong></strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The image average score is calculated by the average values of the format, fit and compression scores. Based on our research, the other image criteria (Color Space, Color Depth and Metadata) will affect the first 3 criteria and in addition, their effect on the overall performance is limited compared to the first 3 criteria. Therefore, we decided not to take the 3 last criteria into account in the image&rsquo;s average score.</span></p>
<p style="padding-left: 60px;">&nbsp;</p>
<p>&nbsp;</p>
<p><strong><strong>How do you calculate the Page Image Score?</strong></strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The Page Image Score is the average value of the scores for all analyzed images.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong><strong>What information is presented in the image&rsquo;s expanded view?</strong></strong></p>
<ul>
<li><strong>Left Tab &ndash; Current Image</strong></li>
</ul>
<p>&nbsp;</p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">Presents the website&rsquo;s current image along with the image grade.</span></p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Middle Tab &ndash; Optimized Image</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">This shows an optimized image using the original image format. This optimization is achieved by scaling the image down to the actual required dimension in the web page and by adjusting the quality compression using Cloudinary&rsquo;s </span><a href="http://cloudinary.com/documentation/image_transformations#automatic_quality_and_encoding_settings"><span style="font-weight: 400;">q_auto algorithm</span></a></p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Right Tab - Format Alternatives</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">This shows the same &nbsp;optimized image in different formats. Recently, modern image formats, such as WebP and JPEG-XR, have been introduced, providing smaller images that often have better quality. The problem with these formats is that they are not supported by all web browsers. WebP is supported by Chrome and Opera, while JPEG-XR is supported by Explorer and Edge.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong><strong>Can I use the optimized images?</strong></strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Sure! For every optimized image, you will find a download button. As long as the original image was yours and the image license permits it, feel free to download the optimized version of the image and use it. (Please refer to the service </span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">Terms of Service</span></a> <a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">f</span></a><span style="font-weight: 400;">o</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">r</span></a> <a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">f</span></a><span style="font-weight: 400;">u</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">l</span></a><span style="font-weight: 400;">l</span> <span style="font-weight: 400;">d</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">e</span></a><span style="font-weight: 400;">t</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">a</span></a><span style="font-weight: 400;">i</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">l</span></a><span style="font-weight: 400;">s</span><a href="http://webspeedtest-staging.cloudinary.com/tos"><span style="font-weight: 400;">.</span></a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

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
