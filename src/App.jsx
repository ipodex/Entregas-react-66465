import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ShoppingCart from './components/shoppingcart/ShoppingCart'
import { CartProvider } from './CartContext'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <Header toggleCart={toggleCart}  />
      <Home />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} /> 
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
      
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
