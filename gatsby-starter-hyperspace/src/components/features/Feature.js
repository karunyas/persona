import React from 'react';
import { Link } from 'gatsby';  
import thesis from '../../pdfs/thesis.pdf';

const Feature = ({href, image, heading, location, description, description1, to}) =>
  <section>
    <a className="image" alt="image">
      <img src={image} alt="" data-position="center center" />
    </a>
    
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <h3>{location}</h3>
        <p>{description}</p>
        <p>{description1}</p>
        <ul className="actions">
          <li>
            <Link className="button" href={to.href}>
              {to.label}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
