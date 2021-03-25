import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'About', href: 'intro' },
    { content: 'Education', href: 'one' },
    { content: 'Professional Work Experience', href: 'jobs' },
    { content: 'Projects + Research', href: 'two' },
    { content: 'Programming Skills', href: 'programming' },
    { content: 'Sculpture', href: 'sculptures' },
    { content: 'Get in touch', href: 'three' }

  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
