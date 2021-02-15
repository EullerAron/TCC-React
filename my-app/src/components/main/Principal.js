import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import '../../css/principal.css';
import viaCepPrincipal from '../../js/Principal/viaCepPrincipal'
import Geocode from "react-geocode";
import InputMask from "react-input-mask";

function Principal(props) {

    var latitude;
    var longitude;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            console.log(latitude);
            console.log(longitude);
        });
    });

    const enviarInfoCuidador = function () {

        props.setTipoCuidado(document.getElementById("priSelect").value);

        function setlocalidade(estado, cidade, rua, bairro) {
            let localidade = estado + " " + cidade + " " + bairro + " " + rua;
            Geocoder(localidade);
        }
        viaCepPrincipal(setlocalidade);

        async function Geocoder(localidade) {
            Geocode.setApiKey("AIzaSyD20-tjmRve02av9mLpPzJsPKQ7wt3R-RA");

            await (Geocode.fromAddress(localidade)).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
     
                    props.setLatitude(lat);
                    props.setLongitude(lng);

                    setPesquisarCuidador(true);
                }
            )
        } 
    }

    const [pesquisarCuidador, setPesquisarCuidador] = React.useState("false");

    if (pesquisarCuidador == true) {
        return <Redirect push to="/busca_cuidador" />;
    }

    return (
        <main id="priIndex">
            <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
            <div className="text-center">
                <br/><br/><br/>
                <img src="/img/lotus.png" width="175px" /><br />

                <h1 id="priH1">A L L <br /> C A R E</h1>
                <h2 id="priH2">CUIDAMOS DE QUEM VOCÊ AMA </h2><br />
                <br /><br />

                <div class="top-search-container">
                    <select name="selectTipo" id="priSelect" >
                        <option value="idoso" selected>Idoso</option>
                        <option value="crianca">Criança</option>
                        <option value="cachorro">Cachorro</option>
                    </select>
                    <InputMask mask="99999-999" placeholder="Informe seu CEP" name="search" id="inputPri" />
                    <a id="pria" onClick={enviarInfoCuidador}><i class="fa fa-search"></i></a>
                </div>

            </div>
        </main>
    );
}

export default Principal;