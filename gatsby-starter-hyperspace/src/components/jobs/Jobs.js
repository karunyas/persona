import React from 'react';

import Job from './Job';

const Jobs = () => {
  const JOBS = [
    {
      title: 'Morgan Stanley Technology Banking M&A',
      location: 'Menlo Park, CA',
      time_period: 'July 2020 - Present',
      description: 'Investment Banking Analyst, Technology M&A',
      description1: 'Worked on Xilinx’s $35Bn Sale to AMD and Gores Holdings VI’s $2.3Bn Acquisition of Matterport'
    },

    {
      title: 'Morgan Stanley Technology Banking',
      location: 'New York, NY',
      time_period: 'July - August 2019',
      description: '\n Investment Banking Intern',
      description1: '\n Worked on several technology transactions; share buybacks, mergers, and acquisitions'
    },
    {
      title: 'Oral Communication (6.UAT)',
      location: 'Cambridge, MA',
      time_period: 'January – May 2019',
      description: 'Teaching Assistant',
      description1: 'Taught students to speak confidently and give effective technical presentations'
    },
    {
      title: 'Tophatter, Inc',
      location: 'San Francisco, CA',
      time_period: 'June – August 2018',
      description: 'Software Engineering Intern',
      description1: 'Built custom catalogs, responsive product page features, internal API for mobile clients, and internal tool to facilitate creation of personalized onsite schedule pages for interviewees'
    },
    {
      title: 'MIT Music Technology Lab, led by Prof. Eran Egozy',
      location: 'Cambridge, MA',
      time_period: 'June – December 2017',
      description: 'Undergraduate Researcher, ConcertCue',
      description1: 'Full-stack web development; deployed web application to provide real-time content at concerts'
    },

  ];

  const [jobs] = React.useState(JOBS);

  return (
    <div>
      <section id="jobs" className="wrapper style1 spotlights">
         {jobs.map(job => <Job key={job.title} {...job} />)}
      </section>
   </div>
  );
}

export default Jobs;
