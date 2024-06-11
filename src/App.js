import './App.css';
import './styles/navbar.css';
import './styles/landing.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css';

import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (



        <div className="app">
          {/* <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/home" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter> */}

          <Navbar />
          <Landing className ="landing-border"/>
          <About className ="about-border"/>
          <Projects className ="projects-border"/>
          <Contact className ="contacts-border"/>



          {/* <Navbar />
          <Landing />
          <About />
          <Projects />
          <Contact /> */}

        </div>










  );
}

export default App;
