import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tos extends Component {
  render() {
    return (
      <div className="static-page container">
        <h1>{this.context.t('Cloudinary Website Speed Test Image Analysis Tool - Terms of Service')}</h1>
        <hr />
			<p class="c0">
				<a name="h.gjdgxs"></a>
				<span class="c2">Welcome to Cloudinary&#39;s Website Speed Test Image Analysis Tool, (the &ldquo;</span>
				<span class="c5 c2">Service</span>
				<span class="c2">&rdquo;). The Service is owned and Operated by Cloudinary Ltd. (&quot;</span>
				<span class="c5 c2">Cloudinary</span>
				<span class="c2">&quot;) </span>
			</p>
			<p class="c0">
				<span class="c2">PLEASE READ CAREFULLY THE FOLLOWING TERMS AND CONDITIONS (THE &quot;</span>
				<span class="c5 c2">TERMS</span>
				<span class="c2">&quot;), BECAUSE THEY CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND CLOUDINARY. BY ACCESSING OR USING THE SERVICE YOU SIGNIFY YOUR ACCEPTANCE OF THESE TERMS. </span>
			</p>
			<h2 class="c7">
				<span>Cloudinary may change the Terms to meet technical, operational and legal changes. Cloudinary may also modify or enhance the Service, and may offer additional tools and features, free-of-charge or subject to fees. </span>
			</h2>
			<p class="c0">
				<span class="c5 c2">Grant of Right</span>
			</p>
			<p class="c0">
				<span class="c2">Subject to these Terms Cloudinary grants you a worldwide, limited, non-exclusive, revocable, non-transferable, non-sublicensable right to use the Service. Except as explicitly provided in these Terms, you may not use the Service for any other purpose.</span>
			</p>
			<p class="c0">
				<span class="c2">Cloudinary may prohibit you from accessing the Service, remove your content and take technical and legal measures to keep you off the Service, if Cloudinary that you: (i) abused your rights to use the Service; (ii) breached the Terms; (iii) violated any applicable law, rule, or regulation; (iv) performed any act or omission which is harmful or likely to be harmful to us, or any other third party, including other users or providers of the Service;</span>
			</p>
			<p class="c0">
				<span class="c5 c2">Acceptable Use of the Service</span>
			</p>
			<p class="c0">
				<span class="c2">When using the Service, you will abide by the applicable laws, rules and regulations, and by any usage guidelines Cloudinary may convey to you from time to time. </span>
			</p>
			<p class="c0">
				<span class="c2">You may not access or use the Service for any illegal or abusive purposes, or to develop or create a similar or competitive product or service to the Service. You will be responsible for all acts and omissions associated with your access and use of the Service and the access and use of the Service.</span>
			</p>
			<p class="c0">
				<span class="c2">You may upload and edit content (&quot;</span>
				<span class="c2 c5">Contributed Content</span>
				<span class="c2">&quot;), subject to any content upload technical and safety guidelines and limitations which will be conveyed to you by Cloudinary and amended from time to time. </span>
			</p>
			<p class="c0">
				<span class="c2">Cloudinary may remove and report any Contributed Content and share user identifiable information, if Cloudinary believes that such content is illegal or abusive or may violate any third party rights. </span>
			</p>
			<p class="c0">
				<span class="c5 c2">Intellectual Property</span>
			</p>
			<p class="c0">
				<span class="c2">Except for your Contributed Content, all rights, title and interest in and to the Service, including any intellectual property rights, are owned by, or licensed to Cloudinary. </span>
			</p>
			<p class="c0">
				<span class="c2">You grant Cloudinary permission to use your Contributed Content, for the purposes of providing, developing and supporting the Service. You acknowledge that Cloudinary may adjust and modify Contributed Content, per your requests.</span>
			</p>
			<p class="c0">
				<span class="c5 c2">Disclaimer </span>
			</p>
			<p class="c0">
				<span class="c2">THE SERVICE IS PROVIDED FOR USE &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT ANY WARRANTIES AND LIABILITY OF ANY KIND. </span>
			</p>
			<p class="c0">
				<span class="c5 c2">General </span>
			</p>
			<p class="c0">
				<span class="c2">These Terms along with the </span>
				<span class="c2 c11 c12">
					<a class="c3" href="http://cloudinary.com/privacy">Privacy Policy</a>
				</span>
				<span class="c2">&nbsp;constitute the entire agreement between you and Cloudinary with respect to the Service. </span>
			</p>
			<p class="c0">
				<span class="c5 c2">Contact Us</span>
			</p>
			<p class="c0">
				<span class="c2">You may contact Cloudinary with any question about the Service, through the contact form at: </span>
				<span class="c2 c11">
					<a class="c3" href="http://cloudinary.com/contact">http://cloudinary.com/contact</a>
				</span>
				<span class="c2">&nbsp;Cloudinary will make efforts to address your inquiry promptly.</span>
			</p>
			<p class="c0 c8">
				<span class="c2">Updated: January 1, 2016.</span>
			</p>
			<p class="c0 c8 c10">
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
