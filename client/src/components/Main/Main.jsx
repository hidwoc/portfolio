import React from 'react';
import Bio from '../../screens/Bio/Bio';
import Contact from '../../screens/Contact/Contact';
import Landing from '../../screens/Landing/Landing';
import Projects from '../../screens/Projects/Projects';
import Skills from '../../screens/Skills/Skills';
import Nav from '../Nav/Nav';

const Main = () => {
  return (
    <div>
      <Landing />
      <Nav/>
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;