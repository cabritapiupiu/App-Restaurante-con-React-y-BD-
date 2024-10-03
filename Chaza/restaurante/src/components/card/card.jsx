import React from 'react'
import './card.css'

export default function Logueo() {
    return (
        <>
            <a href="#" class="resto" id="resto-1" onclick="Resto(1)" className='tarjeta'>
                {/* CONTENEDOR DE LA IMAGEN */}
                <div className="tarjeta-image">
                    <div className="km">
                        <span>4.5KM</span>
                    </div>
                </div>

                {/* CONTENEDOR DE LA INFORMACION */}
                <div className="tarjeta-info">
                    <div className="central">
                        <h2>El gaucho</h2>
                        <p>11 a.m. / 11 p.m.</p>
                        <p>Calle 123</p>
                    </div>
                    <div className="puntuacion">
                        <span>4.5</span>
                    </div>



                    <div className="valoracion">
                        <div className="estrellas">
                            {/* ICONOS DE ESTRELLAS */}
                            ds
                        </div>
                        <div className="dolar">
                            {/* ICONOS DE DOLAR */}
                            dolarblue
                        </div>
                    </div>
                </div>
            </a>

        </>
    );
}



