import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Karunya Sethuraman</h1>
      <p>
        Hi, my name is Karunya Sethuraman, and I'm a recent CS graduate from MIT (S.B. & M.Eng '20), currently open to new opportunities. 
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              See More
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
