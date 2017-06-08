import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tos extends Component {
  render() {
    return (
      <div className="static-page container">
        <h1>{this.context.t('Cloudinary Website Speed Test Image Analysis Tool')}</h1>
        <h1>{this.context.t('Terms of Service')}</h1>
				<p>
					Welcome to Cloudinary&#39;s Website Speed Test Image Analysis Tool, (the &ldquo;<b>Service</b>&rdquo;).
					The Service is owned and Operated by Cloudinary Ltd. (&quot;<b>Cloudinary</b>&quot;)</p>

					<p>PLEASE READ CAREFULLY THE FOLLOWING TERMS AND CONDITIONS (THE &quot;<b>TERMS</b>&quot;),
					BECAUSE THEY CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND CLOUDINARY. BY ACCESSING OR USING THE SERVICE
					YOU SIGNIFY YOUR ACCEPTANCE OF THESE TERMS. </p>

			<p>
            <b>Cloudinary may change the Terms to meet technical, operational and legal changes. Cloudinary may also modify or
               enhance the Service, and may offer additional tools and features, free-of-charge or subject to fees. </b>
            </p>

			<p>
            <b>Grant of Right</b>
            </p>
            <p>
			Subject to these Terms Cloudinary grants you a worldwide, limited, non-exclusive, revocable, non-transferable,
            non-sublicensable right to use the Service. Except as explicitly provided in these Terms, you may not use the Service for any other purpose.
			</p>
			<p>Cloudinary may prohibit you from accessing the Service, remove your content and take technical and legal measures
                to keep you off the Service, if Cloudinary that you: (i) abused your rights to use the Service; (ii) breached
                the Terms; (iii) violated any applicable law, rule, or regulation; (iv) performed any act or omission which is
                harmful or likely to be harmful to us, or any other third party, including other users or providers of the
                Service;
			</p>

			<p>
            <b>Acceptable Use of the Service</b>
            </p>
            <p>
               When using the Service, you will abide by the applicable laws, rules and regulations, and by any usage
               guidelines Cloudinary may convey to you from time to time.
			</p>
			<p>You may not access or use the Service for any illegal or abusive purposes, or to develop or create a
            similar or competitive product or service to the Service. You will be responsible for all acts and omissions
            associated with your access and use of the Service and the access and use of the Service.
			</p>
			<p>You may upload and edit content (&quot;<b>Contributed Content</b>&quot;), subject to any content upload
            technical and safety guidelines and limitations which will be conveyed to you by Cloudinary and amended
               from time to time.
			</p>


			<p className="c0">
				<span className="c2">Cloudinary may remove and report any Contributed Content and share user identifiable information, if Cloudinary believes that such content is illegal or abusive or may violate any third party rights. </span>
			</p>
			<p className="c0">
				<span className="c5 c2">Intellectual Property</span>
			</p>
			<p className="c0">
				<span className="c2">Except for your Contributed Content, all rights, title and interest in and to the Service, including any intellectual property rights, are owned by, or licensed to Cloudinary. </span>
			</p>
			<p className="c0">
				<span className="c2">You grant Cloudinary permission to use your Contributed Content, for the purposes of providing, developing and supporting the Service. You acknowledge that Cloudinary may adjust and modify Contributed Content, per your requests.</span>
			</p>
			<p className="c0">
				<span className="c5 c2">Disclaimer </span>
			</p>
			<p className="c0">
				<span className="c2">THE SERVICE IS PROVIDED FOR USE &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT ANY WARRANTIES AND LIABILITY OF ANY KIND. </span>
			</p>
			<p className="c0">
				<span className="c5 c2">General </span>
			</p>
			<p className="c0">
				<span className="c2">These Terms along with the </span>
				<span className="c2 c11 c12">
					<a className="c3" href="http://cloudinary.com/privacy">Privacy Policy</a>
				</span>
				<span className="c2">&nbsp;constitute the entire agreement between you and Cloudinary with respect to the Service. </span>
			</p>
			<p className="c0">
				<span className="c5 c2">Contact Us</span>
			</p>
			<p className="c0">
				<span className="c2">You may contact Cloudinary with any question about the Service, through the contact form at: </span>
				<span className="c2 c11">
					<a className="c3" href="http://cloudinary.com/contact">http://cloudinary.com/contact</a>
				</span>
				<span className="c2">&nbsp;Cloudinary will make efforts to address your inquiry promptly.</span>
			</p>
			<p className="c0 c8">
				<span className="c2">Updated: Jun 8, 2017.</span>
			</p>
			<p className="c0 c8 c10">
				<span></span>
			</p>

        <p>
          <Link to="/">Back To Home View</Link>
        </p>
      </div>
    );
  }
}

Tos.contextTypes = {
  t: React.PropTypes.func.isRequired
}
