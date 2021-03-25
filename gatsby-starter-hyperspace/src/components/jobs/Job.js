import React from 'react';

const Job = ({title, location, time_period, description, description1, to}) =>
  <section>
    <div className="content">
      <div className="inner">
        <h2>{title}</h2>
        <h3>{location}</h3>
        <h5>{time_period}</h5> 
        <i>{description}</i>
        <p>{description1}</p>
        <ul className="actions">
        </ul>
      </div>
    </div>
  </section>

export default Job;
