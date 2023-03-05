import React from 'react';
import logo from './image/logo.png';

function Navbar() {
  return (

    // Navbar ------------------------------------------------------------------------------------------------ 

      <header className='Header'>

    {/* Logo y nombre ------------------------------------------------------------------------------------------- */}
        <div className='Logo'>
          <img src={logo} alt='Logo DigiBootcamp'/>
          DIGIBOOTCAMP
        </div>
    {/* Logo y nombre ------------------------------------------------------------------------------------------- */}

    {/* nav-links ------------------------------------------------------------------------------------------- */}
        <nav>
          <ul className='nav-links'>
            <li><a href='#'>INICIO</a></li>
            <li><a href='#'>CAMPAMENTO</a></li>
            <li><a href='#'>BOOTCAMPS</a></li>
            <li><a href='#'>BOLETIN</a></li>
          </ul>         
        </nav>
    {/* nav-links ------------------------------------------------------------------------------------------- */}

    {/* Botones ------------------------------------------------------------------------------------------- */}

        <a href='#' className='btn1'><button>INICIAR SECCION</button></a>
        <a href='#' className='btn2'><button>REGISTRARSE</button></a>

    {/* Botones ------------------------------------------------------------------------------------------- */}

      </header>

    // Navbar ------------------------------------------------------------------------------------------------
  );
}

export default Navbar;
