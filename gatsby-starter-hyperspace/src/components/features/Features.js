import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';

import thesis from '../../pdfs/thesis.pdf';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      heading: 'Thesis: A Step Toward Dynamic Displays and Ecological Data Collection In Cognitive Testing',
      location: 'Massachusetts Institute of Technology',
      description: 'M. Eng in Computer Science and Engineering, Systems Concentration (Sept. 2020)',
      description1: 'Thesis Advisors: Dr. Randall Davis and Dr. Dana L. Penney, MIT Computer Science & Artificial Intelligence Laboratory',
  
      to: {
        href: "../../pdfs/thesis.pdf",
        label: 'Read more',
      },
    },

    {
      href: '/#',
      image: pic2,
      heading: 'S.B. in Computer Science and Engineering (May. 2020)',
      location: 'Massachusetts Institute of Technology',
      description: '',
      description1: '',
      to: {
        href: '#two',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <div>
      <section id="one" className="wrapper style2 spotlights">
         {features.map(feature => <Feature key={feature.heading} {...feature} />)}
      </section>
   </div>
  );
}

export default Features;
