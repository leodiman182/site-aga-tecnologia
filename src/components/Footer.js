import React from 'react';
import logoLetters from '../assets/imgs/aga-tecnologia-white-only.png';

class Footer extends React.Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <>
        <footer className="w-full bg-primaryblue  text-sm text-center text-white">
          <div className="py-4">
            <p>
              Copyright ©&nbsp;
               <img className="h-4 inline" src={ logoLetters } alt="AGA TECNOLOGIA" />
               &nbsp;- { year }</p>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;
