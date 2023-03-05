import React from 'react';
import image1 from './image-body/image1.jpeg';


function Body() {
    return(

        <>
            {/* inicio------------------------------------------------------------------------------------ */}
            <section className='inicio'>
                <div className='contenido_inicio'>
                    <h1>ÚNETE A NUESTROS BOOTCAMPS GRATUITOS</h1>
                    <p>RECIBE CAPACITACIÓN PARA DESARROLLAR UNA SOLUCIÓN COMPLETA DE SOFTWARE.</p>
                    <a href='#' className='btnInicio'><button>REGISTRARSE</button></a>
                </div>
                <img src={image1} alt='imagen_inicio' className='imagen_inicio' />
            </section>
            {/* inicio------------------------------------------------------------------------------------- */}

            {/* Tarjetas ------------------------------------------------------------------------------------- */}

            <section className='tarjetas'>
                <div className='contenidoTarjetas'>
                    <div className='cardTitle'>
                        <h6>COMIENZA A PREPARATE DESDE YA</h6>
                        <h2>NUESTRO MODELO DE ENSEÑANZA</h2>
                    </div>
                    <div className='layer'></div>
                    <div className='card1'>
                        
                    </div>
                </div>
            </section>

            {/* Tarjetas ------------------------------------------------------------------------------------- */}
        </>
    );
}

export default Body;