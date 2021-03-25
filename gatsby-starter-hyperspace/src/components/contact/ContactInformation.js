import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Email</h3>
        <a href="/#">karunyas@alum.mit.edu</a>
      </li>

      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="https://github.com/karunyas" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karunyasethuraman/" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
