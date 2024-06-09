import './App.css';
import './styles/navbar.css';
import './styles/landing.css';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';



function App() {
  return (
    <div className="App">
      <main>

        <div className="App">
          <Navbar />
          <Landing />
          <About />
          <Projects />
          <Contact />

        </div>




      </main>




    </div>
  );
}

export default App;
