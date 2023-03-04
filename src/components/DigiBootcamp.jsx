import logo from '../image/logo.png';
import '/Users/esild/digi-bootcamp/src/components/';

function DigiBootcamp() {
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

        <a href='#' className='btn'><button>INICIAR SECCION</button></a>
        <a href='#' className='btn'><button>REGISTRARSE</button></a>

    {/* Botones ------------------------------------------------------------------------------------------- */}

      </header>

    // Navbar ------------------------------------------------------------------------------------------------
  );
}

export default DigiBootcamp;
