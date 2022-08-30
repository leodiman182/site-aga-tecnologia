import React from 'react';
import logoImg from '../assets/imgs/aga-tecnologia-logo-only.png';
import logoLetters from '../assets/imgs/aga-tecnologia-white-only.png';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="flex items-center justify-center w-full bg-primaryblue font-bold text-xl text-center text-white py-3">
            <img className="h-12 px-2 mx-auto md:mx-0" src={ logoImg } alt="Logo AGA TECNOLOGIA" />
            <img className="h-12 px-2 invisible hidden md:visible md:block" src={ logoLetters } alt="AGA TECNOLOGIA" />
        </header>
      </>
    )
  }
}

export default Header;
