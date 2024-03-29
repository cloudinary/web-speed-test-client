import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactDisqusComments from 'react-disqus-comments';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="about static-page container">
        <h1>About Cloudinary Website Speed Test</h1>
        <hr />

        <p>
          Website Speed Test analyzes a website&#39;s images and provides a
          ranking for a variety of image aspects and categories. Using a grade
          range of A-F, it rates the image format, fit, compression rate, color
          space and color depth.
        </p>
        <p>
          Along with the ranking, the Website Speed Test tool provides
          measurable and actionable information about how to go beyond simple
          compression to optimize web performance. Users can discover how
          changes to image size, format selection, quality and encoding
          parameters to drastically improve their web page&#39;s load speed.
        </p>
        <p>
          The Website Speed Test image analysis tool is integrated with{' '}
          <a href="https://www.webpagetest.org/">WebPagetest</a>. With this
          integration, <a href="http://cloudinary.com/">Cloudinary</a> powers
          WebPagetest with robust image analysis capabilities, enabling users to
          see and understand the problems related to images on their pages.
          Users receive valuable information on how to manage those images so
          they can deliver an optimal user experience.
        </p>
        <p>You can use the tool in two ways:</p>
        <ul>
          <li>
            From WebPagetest: Run the test in{' '}
            <a href="https://www.webpagetest.org/">WebPagetest</a> and in the
            results page, click the Image Analysis tab.
          </li>
          <li>
            From Website Speed Test: Go directly to{' '}
            <a href="https://webspeedtest.cloudinary.com/">
              Website Speed Test
            </a>{' '}
            and enter the URL for the web page you want to analyze.
          </li>
        </ul>
        <h2>Website Speed Test FAQ</h2>
        <h3>Analyzed Images</h3>
        <h4>
          The report doesn&#39;t seem to be showing all the images in my web
          page
        </h4>
        <ul>
          <li>
            We analyze only images that are defined in the web page as
            &lt;IMG&gt; elements.
          </li>
          <li>
            We analyze all background-image images except for ones with
            background-repeat round.
          </li>
          <li>
            We limit the analysis to the 50 images with the highest resolution
            (pixel width X height) in the web page.
          </li>
        </ul>
        <h3>Analysis Logic</h3>
        <h4>How do you calculate the image&#39;s average score?</h4>
        <p>
          The image average score is calculated by the average values of the
          format, fit and compression scores. Based on our research, the other
          image criteria (Color Space, Color Depth and Metadata) will affect the
          first 3 criteria and in addition, their effect on the overall
          performance is limited compared to the first 3 criteria. Therefore, we
          decided not to take the 3 last criteria into account in the
          image&#39;s average score.
        </p>
        <p>
          For further details, please refer to our post{' '}
          <a href="https://www.smashingmagazine.com/2017/07/website-speed-test-image-analysis-tool/#measure-overall-performance">
            Introducing The Website Speed Test Image Analysis Tool
          </a>{' '}
          in <a href="https://www.smashingmagazine.com">Smashing Magazine</a>
        </p>
        <h4>How do you calculate the Page Image Score?</h4>
        <p>
          The Page Image Score is the average value of the scores for all
          analyzed images.
        </p>
        <h4>What information is presented in the image&#39;s expanded view?</h4>
        <b>Left Tab – Current Image</b>
        <p>
          Presents the website&#39;s current image along with the image grade.
        </p>
        <b>Middle Tab – Optimized Image</b>
        <p>
          This shows an optimized image using the original image format. This
          optimization is achieved by scaling the image down to the actual
          required dimension in the web page and by adjusting the quality
          compression using Cloudinary&#39;s{' '}
          <a href="http://cloudinary.com/documentation/image_transformations#automatic_quality_and_encoding_settings">
            q_auto algorithm
          </a>
        </p>
        <b>Right Tab - Format Alternatives</b>
        <p>
          This shows the same &nbsp;optimized image in different formats.
          Recently, modern image formats, such as WebP and JPEG-XR, have been
          introduced, providing smaller images that often have better quality.
          The problem with these formats is that they are not supported by all
          web browsers. WebP is supported by Chrome and Opera, while JPEG-XR is
          supported by Explorer and Edge.
        </p>
        <h4>Why do you suggest alternative formats for SVG images?</h4>
        <p>
          Using the SVG format introduces many advantages, especially for static
          backends that can supply only a single image for all resolutions. But
          for dynamic image management solutions, which can serve different
          images for different viewport sizes, there are cases where you can
          serve non-SVG images that will give you visually similar results at a
          smaller size.
        </p>
        <h3>Other</h3>
        <h4>Can I use the optimized images?</h4>
        <p>
          Sure! For every optimized image, you will find a download button. As
          long as the original image was yours and the image license permits it,
          feel free to download the optimized version of the image and use it.
          (Please refer to the service{' '}
          <a href="http://webspeedtest-staging.cloudinary.com/tos">
            Terms of Service
          </a>
          &nbsp;for full details.
        </p>
        <h4>
          Why does the screenshot of the whole web page at the top of the report
          occasionally show images that are different than the images that are
          actually analyzed?
        </h4>
        <p>
          The service that creates the web page screenshot thumbnail is
          different from the service that requests the website’s images for the
          analysis. We do our best to ensure that both services use similar
          characteristics, such as viewport size, but we can’t guarantee that
          everything is identical. For example, a web page may show different
          content based on things like access location, time of day, or agent
          type.
        </p>
        <h4>
          Why do I see fewer images in your report than I see when I browse the
          web page from my browser?
        </h4>
        <p>There could be few different reasons for this situation:</p>
        <ul>
          <li>
            There are some websites that use a &#34;lazy loading&#34; approach.
            This means that the browser gets more and more content &#40;images
            in this case&#41; when the user performs an action such as scrolling
            down. In such a case, our engine doesn&#39;t get these images and
            thus we can&#39;t analyze them.
          </li>
          <li>
            Website Speed Test doesn&#39;t analyze hidden images
            &#40;&#39;display: none&#39; or &#39;visibility: hidden&#39; in
            css&#41;. For example, if you have a carousel with 9 images, but 8
            are hidden at any moment in time, the engine only analyzes the
            single image displayed on the page at the time that the analysis is
            performed.
          </li>
          <li>
            Website Speed Test doesn&#39;t analyze the same image twice, unless
            the image is presented with different dimensions.
          </li>
          <li>
            Website Speed Test analyzes up to 300 images per page. Additionally,
            it does not analyze extremely large images &#40;those over 9 million
            pixels&#41;.
          </li>
        </ul>

        <ReactDisqusComments
          shortname="website-speed-test"
          identifier="about"
          url="https://webspeedtest.cloudinary.com/about"
        />

        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    );
  }
}

export default withTranslation()(About);
