import React from 'react';
import { BsInstagram, BsWhatsapp, BsLinkedin, BsFacebook } from "react-icons/bs";

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Section1 from './sections/Section1';
// import Section3 from './sections/Section3';

import logoImg from './assets/imgs/aga-tecnologia-logo-only.png';
import logoLetters from './assets/imgs/aga-tecnologia-white-only.png';
import warningImg from './assets/imgs/Warning-PNG-HD.png';

import './assets/css/hr.css';

class App extends React.Component {
  render() {
    let iconStyles = { color: "white", fontSize: "2rem", marginLeft: '15px', marginRight: '15px' };
    return (
      <section className="bg-primaryblue w-screen h-screen flex flex-col items-center justify-evenly text-center">
        <div className="flex flex-col items-center justify-center">
          <img className="h-24 mx-auto md:mx-0" src={ logoImg } alt="Logo AGA TECNOLOGIA" />
          <img className="mx-auto px-4 mt-6 w-6/12 max-h-14" src={ logoLetters } alt="AGA TECNOLOGIA" />
        </div>
        <div className="mx-auto">
          <img
            className="mx-auto"
            style={ {maxWidth: '40px'} }
            src={ warningImg }
            alt="warning"
          />
          <h2 className="mt-2 text-center text-white text-sm 
          mx-auto">Site em construção...</h2>
        </div>
        <div>
          <p className="text-white">atendimento@agatecnologia.com.br</p>
          <div className="w-full flex flex-row justify-center pt-4">
            <a target="_blank" href="https://contate.me/agatecnologia" rel="noreferrer">
              <BsWhatsapp style={ iconStyles } />
            </a>
            <a target="_blank" href="https://www.instagram.com/agatecnologia/" rel="noreferrer">
              <BsInstagram style={ iconStyles } />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/aga-tecnologia/" rel="noreferrer">
              <BsLinkedin style={ iconStyles } />
            </a>
            <a target="_blank" href="https://www.facebook.com/agatecnologia.br" rel="noreferrer">
              <BsFacebook style={ iconStyles } />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default App;

