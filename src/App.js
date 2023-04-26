import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/resume" element={<Resume />}>
          </Route>
          <Route path="/work" element={<Work />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
