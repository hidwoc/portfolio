import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./Main.css"

const Main = ({ admin, heidi }) => {
  return (
    <main id="main">
      <Bio heidi={heidi} admin={admin}/>
      <Skills skills={heidi.skills} admin={admin}/>
      <Projects projects={heidi.projects} admin={admin}/>
      <Contact resume={heidi.resume} socials={heidi.socials} admin={admin}/>
    </main>
  );
};

export default Main;
