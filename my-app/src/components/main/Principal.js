import React, { useEffect } from 'react';
import '../../css/principal.css';
import pedirLoc from '../../js/Principal/pedirLoc';
import buscaCuidadores from '../../js/Principal/buscaCuidadores';

function Principal() {

    useEffect(() => {
        pedirLoc();
        buscaCuidadores();
    });

    return (
        <main id="priIndex">
            <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
            <div className="text-center">
                <img src="/img/lotus.png" width="175px"/><br />

                <h1 id="priH1">A L L <br /> C A R E</h1>
                <h2 id="priH2">CUIDAMOS DE QUEM VOCÊ AMA </h2><br />
                <br /><br /><br />

                
                <select name="selectTipo" id="priSelect" >
                    <option value="idoso" selected>Idoso</option>
                    <option value="crianca">Criança</option>
                    <option value="cachorro">Cachorro</option>
                </select>
                
                <input id="priInput" type="text" placeholder="Informe sua localização"/>

            </div>
        </main>
    );
}

export default Principal;