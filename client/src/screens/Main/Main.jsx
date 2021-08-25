import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./Main.css"

const Main = ({ admin, heidi }) => {
  return (
    <main id="main">
      <Bio heidi={heidi}/>
      <Skills skills={heidi.skills}/>
      <Projects projects={heidi.projects}/>
      <Contact resume={heidi.resume} socials={heidi.socials}/>
    </main>
  );
};

export default Main;
