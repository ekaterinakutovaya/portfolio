import React from 'react';
import { useTranslation } from "react-i18next";

import { About, Footer, Header, Skills, Testimonial, Work, Works } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="app">
      
      <Navbar />
      
      <Header />
      {/* <About /> */}
      {/* <Works /> */}
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App;
