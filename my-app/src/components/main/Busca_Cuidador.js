import React, { useEffect } from 'react';
import GoogleMapReact, { google } from 'google-map-react'
import '../../css/busca_cuidador.css';

let mapOptions = {
    center: { lat: -26.876800, lng: -49.062970 },
    zoom: 15,
};

function Busca_Cuidador(props) {

    const ModelsMap = (map, maps) => {
        new maps.Marker({
            position: { lat: -26.876800, lng: -49.062970 },
            map

        });
        function muda(lat, lng) {
            map.setCenter({ lat: -26.876800, lng: -49.062970 })
            /* map.setCenter({ lat: lat, lng: lng }) */
        }
        document.getElementById("alterCenter").addEventListener('click', function () {
            muda()
        })
    }

    useEffect(() => {
        
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
                        
    });
    
    const latitude = props.latitude;
    const longitude = props.longitude;
    const tipoCuidado = props.tipoCuidado;
                    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "/busca/cuidador_" + tipoCuidado +  "/" + latitude + "/" + longitude, true);
 
    xhr.addEventListener("load", function () {

        console.log("Resposta: " + xhr.response);

        var resposta = xhr.responseText;

        var respostaJson = JSON.parse(resposta);

        console.log("acessando o user: " + respostaJson.user);

        if (respostaJson.error) {
            console.log(respostaJson.error);
        } else {

            console.log("foiiii: " + respostaJson);
        }
    });

    xhr.send();

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
                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Rafael Martins Silva</p>
                            <p id="idIdade">30 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 4.8 </p>
                        </div>
                    </div>
                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">João Silva</p>
                            <p id="idIdade">25 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 4.2 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <div>
                            <p id="idNome">Maria Antonia</p>
                            <p id="idIdade">38 Anos</p>
                            <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                            <p id="idAval">Nota: 5.0 </p>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
}

export default Busca_Cuidador;