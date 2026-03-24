// App.jsx
// Root application component — assembles all sections in order
// Uses a single-page scroll layout with sticky navbar

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="app">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content — all sections in scroll order */}
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
