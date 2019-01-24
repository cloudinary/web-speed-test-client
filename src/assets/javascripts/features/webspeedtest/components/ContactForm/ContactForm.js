import React, { Component, PropTypes } from 'react';

import './ContactForm.scss';

export default class ContactForm extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//app-ab12.marketo.com/js/forms2/js/forms2.min.js";
    script.async = true;
    script.onload = () => {
      MktoForms2.loadForm("//app-ab12.marketo.com", "396-LRB-524", 1123, function(form) {
        // Labels -> placeholders
        var labels = document.querySelectorAll("label.mktoLabel");
        var i = labels.length;
        while (i--) {
          var label = labels.item(i);
          var text = label.textContent.replace(/[:*]/g,'');
          var input = label.parentNode.querySelector('input');
          if (input) {
              input.setAttribute("placeholder", text);
          }
        }
        // debugger;
      });
    };
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="contactForm">
        <h2>{this.context.t('LeadForm_Title')}</h2>
        <form id="mktoForm_1123"></form>
      </div>
    );
  }
}

ContactForm.contextTypes = {
  t: React.PropTypes.func.isRequired
}
