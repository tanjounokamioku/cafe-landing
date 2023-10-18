import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import SocialLinks from './components/SocialLinks';

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className={`main-content`}>
        <About />
        <SocialLinks />
        <Team />
      </div>

      <Analytics />
    </div>
  );
}

export default App;
