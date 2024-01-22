import Test from './test';
import './app.scss';
import { Contact} from './components/contact/contact';
import Hero from './components/hero/hero';
import { Navbar } from './components/navbar/Navbar';
import { Parallax } from './components/parallax/Parallax';
import { Projects } from './components/projects/Projects';
import {Services} from './components/services/Services';
const App = () => {
  return (
    <div>
      {/* <Cursor></Cursor> */}
      <section id='Home'>
        <Navbar />
        <Hero></Hero>
      </section>

      <section id = 'Skills'>
        <Parallax type="skills"></Parallax>
      </section>
      <section id = 'Skills'>
        <Services></Services>
      </section>

      <section id='Projects'>
      <Parallax type=""></Parallax>      </section>
      <Projects></Projects>
      
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
