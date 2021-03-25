import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Features     from '../components/features/Features';
import Jobs         from '../components/jobs/Jobs';
import Capabilities from '../components/capabilities/Capabilities';
import Programming  from '../components/programming/Programming';
import Contact      from '../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Features />
      <Jobs />
      <Capabilities />
      <Programming />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
