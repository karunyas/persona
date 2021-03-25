import React from 'react';
import { Link } from 'gatsby';

const Capability = ({ heading, description, iconClass, to}) =>
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>{heading}</h3>
    <p>{description}</p>
    <ul className="actions">
        <li>
            <a className="button" href={to.href}>
              {to.label}
            </a>
        </li>
     </ul>
  </section>

export default Capability;
