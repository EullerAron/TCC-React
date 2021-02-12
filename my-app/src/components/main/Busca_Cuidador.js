import React, { useEffect } from 'react';
import GoogleMapReact, { google } from 'google-map-react'
import '../../css/busca_cuidador.css';
import { Redirect } from 'react-router';

let mapOptions = {
    center: { lat: -26.876800, lng: -49.062970 },
    zoom: 15,
};

function Busca_Cuidador(props) {
    
    const latitude = props.latitude;
    const longitude = props.longitude;
    const tipoCuidado = props.tipoCuidado;

    const [PerfilCuidador, setPerfilCuidador] = React.useState([]);

    const ModelsMap = (map, maps) => {
        function marca(lat, lng){
            let latn = Number(lat)
            let lngn = Number(lng)
            new maps.Marker({
                position: { lat: latn, lng: lngn },
                map
    
            });
            
        }
        
        function muda(lat, lng) {
            map.setCenter({ lat: lat, lng: lng })
        }
        

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "/busca/cuidador_" + tipoCuidado +  "/" + latitude + "/" + longitude, true);
    
        xhr.addEventListener("load", function () {

            console.log("Resposta: " + xhr.response);

            var resposta = xhr.response;

            var respostaJson = JSON.parse(resposta);

            var perfilCuidadores = respostaJson.cuidadoresPerto;

            if (respostaJson.error) {
                console.log(respostaJson.error);
            } else {
                for (let i = 0; i < perfilCuidadores.length; i++) {
                    marca(perfilCuidadores[i].user.latitude, perfilCuidadores[i].user.longitude);
                }
                muda(latitude, longitude)
                setPerfilCuidador(perfilCuidadores);
            }
        });

        xhr.send();
    }

    useEffect(() => {

        if (document.getElementById("cachorro")) {
            switch (tipoCuidado) {
                case 'cachorro':
                    document.getElementById("cachorro").setAttribute("selected", "selected");
                    break;
                case 'crianca':
                    document.getElementById("crianca").setAttribute("selected", "selected");
                    break;
                case 'idoso':
                    document.getElementById("idoso").setAttribute("selected", "selected");
                    break;
                default:
                    break;
            }
        }                
    });
                    
    

    const carregaPerf = function (e){
        var elemento = e.target.id;
        console.log(elemento)
        props.setIdPerfilCuidador(elemento);

        setRedPerfil(true);
    }
    const [ redPerfil, setRedPerfil ] = React.useState(false);

    if (redPerfil){
        return <Redirect push to="/perfil_cuidador" />;
    }


    return (
        <div>
            <div id="container">
                <div id="filtros">
                    <form>
                        <div id="filtrosInt">
                            <label htmlFor="idCategoria">Selecione o Cuidador desejado: </label>
                            <select name="nmCategoria" id="idCategoria">
                                <option value="crianca" id="crianca">Criança</option>
                                <option value="idoso" id="idoso">Idoso</option>
                                <option value="cachorro" id="cachorro">Cachorro</option>
                            </select><br />
                        </div>

                        <div id="filtrosInt">
                            <label htmlFor="idTipoCuidado">Selecione o tipo de cuidado: </label>
                            <select name="nmTipoCuidado" id="idTipoCuidado">
                                <option value="minhaCasa">Minha Casa</option>
                                <option value="casaCuidador">Casa Cuidador</option>
                            </select><br />
                        </div>

                        <div id="filtrosInt">
                            <label htmlFor="idSexo">Sexo</label>
                            <select name="nmSexo" id="idSexo">
                                <option value="m">Masculino</option>
                                <option value="f">Feminino</option>
                            </select>
                        </div>

                        <div id="filtrosInt">
                            <label htmlFor="idIdade">Idade:</label>
                            <input type="number" name="nmIdade" id="idIdade" min="0" /><br />
                        </div>

                        <div id="filtrosInt">
                            <label htmlFor="idData">Data:</label>
                            <input type="date" name="nmData" id="idData" /><br />
                        </div>

                        <div id="filtrosInt">
                            <label for="idHora">Hora:</label>
                            <select name="nmHora" id="idHora">
                                <option value="manha">Manhã</option>
                                <option value="tarde">Tarde</option>
                                <option value="noite">Noite</option>
                                <option value="integral">Integral</option>
                            </select><br />
                        </div>

                        <div id="filtrosInt">
                            <button id="alterCenter" class="btn btn-primary" type="button">FILTRAR</button>
                        </div>
                    </form>
                </div>

                <div id="mapa">
                    <div style={{ height: '100%', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyD20-tjmRve02av9mLpPzJsPKQ7wt3R-RA" }}
                            defaultCenter={{ lat: -26.918282, lng: -49.065385 }}
                            defaultZoom={15}
                            options={mapOptions}
                            onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
                        ></GoogleMapReact>
                    </div>

                </div>


                <div id="perfilCuid">
                    <div id="idTitPerfil">
                        <h3>Cuidadores Próximos</h3>
                    </div>

                    { PerfilCuidador.map(perfil => (
                        <div className="idImagem" id={perfil.user._id} key={`0${perfil.user._id}`} onClick={carregaPerf} >
                            <img src="/img/adicionar-fotos.png" id="img" key={`1${perfil.user._id}`}></img>
                            <div key={`6${perfil.user._id}`}>
                                <p id="idNome" key={`2${perfil.user._id}`}>{perfil.user.nome}</p>
                                <p id="idValor" key={`3${perfil.user._id}`}>Valor: R${perfil.cuidador.valor}</p>
                                <p id="idEnd" key={`4${perfil.user._id}`}>{perfil.user.bairro}, {perfil.user.cidade}</p>
                                <p id="idAval" key={`5${perfil.user._id}`}>Nota: 5.0 </p>
                            </div>
                        </div>

                    ))}

                </div>


            </div>

        </div>
    );
}

export default Busca_Cuidador;