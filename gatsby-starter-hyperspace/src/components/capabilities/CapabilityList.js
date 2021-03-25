import React from 'react';

import Capability from './Capability';

import thesis from '../../pdfs/HsuSethuramanFinalReport Abstract.pdf';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Alabama Vaccine Aggregator',
      description: 'Worked with Partners In Health on a website (https://bamavax.info) and twitter bot to scrape available Covid-19 vaccine appointments across the state of Alabama and make them available',
      iconClass: 'fa-code',
      to: {
        href: "https://www.bamavax.info",
        label: "Link to Bamavax.info",
      },
      
    },
    {
      heading: 'ColorStitch',
      description: 'We aim to create a state-of-the-art cross-stitch pattern generator and use it to both generate and sell custom patterns & cross-stitch kits. Currently funded by MIT Sandbox.',
      iconClass: 'fa-diamond',
      to: {
        href: "http://sandbox.mit.edu",
        label: "Link to Sandbox",
      },
    },
    {
      heading: 'Secure Email Voting',
      description: 'Final project for 6.857 (Network and Computer Security) - a secure email voting scheme based on an overlay network that utilizes onion routing to provide users with anonymity. Includes strategies for secure registration, voting, and authentication.',
      iconClass: 'fa-cog',
      to: {
        href: "https://courses.csail.mit.edu/6.857/2020/projects/7-Chen-Hsu-Sethuraman-Srinivasan.pdf",
        label: "Read More",
      },
    },
    {
      heading: 'ColorDJ',
      description: "A system that allows the user to submit images over text and returns a Spotify playlist songs based around the image's properties (color profile, detected expressions / objects, etc). This project was built with Flask in Python and uses the Google Cloud Vision and Language Processing API, the Spotify API, and Twilio.",
      iconClass: 'fa-desktop',
      to: {
        href: "https://github.com/M1Hackers/ColorDJ",
        label: "Link to ColorDJ repository",
      },
    },
    {
      heading: 'FRUITS',
      description: 'FRUITS offers the opportunity to create an unlimited number of different itineraries. Each itinerary keeps track of the locations visited and the times in the schedule reserved for the visit. System: built using Ruby on Rails with a React frontend, leveraging Google Cloud Platform for Maps and Places.',
      iconClass: 'fa-cog',
      to: {
        href: "https://github.com/M1Hackers/fruits",
        label: "Link to FRUITS repository",
      },
    },
    {
      heading: 'Identifying Acute Myeloid Leukemia using Machine Learning Methods on Selected DNA Methylation Data',
      description: 'Final Project for 6.047 (Computational Biology: Genomes, Networks, Evolution), a research project involving the creation and evaluation of feature selection and machine learning methods, outlining the pros and cons of each when applied to identifying AML cases using DNA methylation data.',
      iconClass: 'fa-cog',
      to: {
        href: '../../pdfs/HsuSethuramanFinalReport Abstract.pdf',
        label: "Link to Abstract",
      },
    },    
    {
      heading: 'FunTimes',
      description: 'Android application for finding fun places nearby, based on certain charecteristics. A project for YHack 2017.',
      iconClass: 'fa-chain',
      to: {
        href: "https://github.com/M1Hackers/FunTimes",
        label: "Link to FunTimes repository",
      },
    },
    {
      heading: 'Language Learner',
      description: "Available on the Chrome Web Store, Language Learner highlights words from the user's quizlet playlist in any webpage, so they can learn new vocabulary in context. Works across languages.",
      iconClass: 'fa-lock',
      to: {
        href: "https://github.com/M1Hackers/languagelearner",
        label: "Link to repository",
      },
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
