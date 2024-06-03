import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} /> {/* Redirige de la ruta de inicio a la página "About" */}
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
