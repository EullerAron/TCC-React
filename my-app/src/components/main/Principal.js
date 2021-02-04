import React, { useEffect } from 'react';
import '../../css/principal.css';
import { Redirect } from 'react-router';

function Principal(props) {

    var latitude;
    var longitude;
    
    const [ Busca, setBusca ] = React.useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            latitude   = position.coords.latitude;
            longitude  = position.coords.longitude;
    
            console.log(latitude);
            console.log(longitude);
        });
    });

    const enviarInfoCuidador = function (){
        props.setLatitude(latitude);
        props.setLongitude(longitude);
        props.setTipoCuidado(document.getElementById("priSelect").value);
        setBusca(true);
    }

    if (Busca){
        return <Redirect push to="/busca_cuidador" />;
    }

    return (
        <main id="priIndex">
            <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
            <div className="text-center">
                <img src="/img/lotus.png" width="175px"/><br />

                <h1 id="priH1">A L L <br /> C A R E</h1>
                <h2 id="priH2">CUIDAMOS DE QUEM VOCÊ AMA </h2><br />
                <br /><br /><br />

                <div class="top-search-container">
                    <select name="selectTipo" id="priSelect" >
                        <option value="idoso" selected>Idoso</option>
                        <option value="crianca">Criança</option>
                        <option value="cachorro">Cachorro</option>
                    </select>
                    <input type="text" placeholder="Informe sua localização" name="search"/>
                    <a onClick={enviarInfoCuidador}><i class="fa fa-search"></i></a>
                </div>

            </div>
        </main>
    );
}

export default Principal;