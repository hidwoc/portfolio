import { useEffect, useState } from "react";
import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Main = ({ admin, heidi }) => {
  return (
    <div>
      <Bio heidi={heidi}/>
      <Skills skills={heidi.skills}/>
      <Projects projects={heidi.projects}/>
      <Contact resume={heidi.resume} socials={heidi.socials}/>
    </div>
  );
};

export default Main;
