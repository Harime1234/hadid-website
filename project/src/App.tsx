import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Exports from './components/sections/Exports';
import About from './components/sections/About';
import { SmoothCursorDemo } from './components/ui/SmoothCursorDemo';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Haadi Enterprises - Import & Export Solutions';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <SmoothCursorDemo />
      <Navbar />
      <Hero />
      <Services />
      <Exports />
      <About />
      <Footer />
    </div>
  );
}

export default App;