import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        If you have an opportunity you think I'd be interested in, or would like to chat, please reach out!
      </p>
        <ContactInformation />
    </div>
  </section>

export default Contact;
