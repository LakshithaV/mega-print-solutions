import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const Home = () => (
  <div className="home">
    <img src="https://raw.githubusercontent.com/LakshithaV/mega-print-solutions/refs/heads/master/public/images/banner.jpg" alt="Mega Print Banner" className="banner" />
  </div>
);

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/mega-print-solutions" element={<Home />} /> {/* Ensure route for landing page */}
          <Route path="/" element={<Home />} /> {/* Also ensure "Home" route */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
