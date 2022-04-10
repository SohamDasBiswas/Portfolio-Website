import './App.css';
import {Helmet} from "react-helmet";
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soham Das Biswas-Portfolio Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Home />
      <About />
      <Skills />
      <Hobbies />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
