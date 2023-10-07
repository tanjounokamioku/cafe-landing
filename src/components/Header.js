import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/banner.png';

function Header() {
  // Additional state to track selected language
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Updating the selected language state
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const buttonBaseStyle = "py-1 px-3 mx-1 rounded-full text-white shadow-lg transition-all duration-150 ease-in-out focus:outline-none active:scale-95 ";
  const selectedStyle = "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-md";
  const notSelectedStyle = "bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 hover:shadow-md";

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <img src={logo} alt="CyberCafe Logo" className="logo" />
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="language-buttons" style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <button
          onClick={() => changeLanguage('pt')}
          className={buttonBaseStyle + (selectedLanguage === 'pt' ? selectedStyle : notSelectedStyle)}
        >
          PTBR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={buttonBaseStyle + (selectedLanguage === 'en' ? selectedStyle : notSelectedStyle)}
        >
          ENG
        </button>
        <button
          onClick={() => changeLanguage('jp')}
          className={buttonBaseStyle + (selectedLanguage === 'jp' ? selectedStyle : notSelectedStyle)}
        >
          日本語
        </button>
      </div>
    </header>
  );
}

export default Header;
