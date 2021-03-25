import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Projects & Research</h2>
      <p>
        Please see below a couple projects I've worked on.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Link className="button" href="https://github.com/karunyas">
            Link to Github
          </Link>
        </li>
      </ul>
    </div>
  </section>

export default Capabilities;
