import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import News from './Components/News';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Body />
            <Footer />
          </>} />
          <Route path="/services" element={<>
            <Header />
            <Services />
            <Footer />
          </>} />
          <Route path="/contact" element={<>
            <Header />
            <Contact />
            <Footer />
          </>} />
          <Route path="/news" element={<>
            <Header />
            <News />
            <Footer />
          </>} />
          <Route path="/about" element={<>
            <Header />
            <About />
            <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
