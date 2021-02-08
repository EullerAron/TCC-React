import React, { useEffect } from 'react';
import '../../css/busca_cuidador.css'

function Busca_Cuidador(props) {

    useEffect(() => {

        const latitude = props.latitude;
        const longitude = props.longitude;
        const tipoCuidado = props.tipoCuidado;

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

          }

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/busca/cuidador_cachorro", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

            console.log("Resposta: " + xhr.response);

            var resposta = xhr.responseText;

            var respostaJson = JSON.parse(resposta);

            console.log("acessando o user: " + respostaJson);

            if (respostaJson.error) {
                console.log(respostaJson.error);
            } else {

                console.log("foiiii: " + respostaJson);
            }
        });

        xhr.send("latitude=" + latitude + "&longitude=" + longitude);
    });

    return (
        <div>
            <div id="container">
                <div id="filtros">
                    <form>
                        <label htmlFor="idCategoria">Selecione o Cuidador desejado: </label>
                        <select name="nmCategoria" id="idCategoria">
                            <option value="cachorro" id="cachorro" >Cachorro</option>
                            <option value="crianca" id="crianca" >Criança</option>
                            <option value="idoso" id="idoso" >Idoso</option>
                        </select><br />

                        <label htmlFor="idTipoCuidado">Selecione o tipo de cuidado: </label>
                        <select name="nmTipoCuidado" id="idTipoCuidado">
                            <option value="minhaCasa">Minha Casa</option>
                            <option value="casaCuidador">Casa Cuidador</option>
                        </select><br />

                        <label htmlFor="idSexo">Sexo</label>
                        <select name="nmSexo" id="idSexo">
                            <option value="m">Masculino</option>
                            <option value="f">Feminino</option>
                        </select>

                        <label htmlFor="idIdade">Idade:</label>
                        <input type="number" name="nmIdade" id="idIdade" min="0" /><br />

                        <label htmlFor="idData">Data:</label>
                        <input type="date" name="nmData" id="idData" /><br />

                        <label for="idHora">Hora:</label>
                        <select name="nmHora" id="idHora">
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Noite</option>
                            <option value="integral">Integral</option>
                        </select><br />

                        <button type="button">FILTRAR</button>
                    </form>
                </div>

                <div id="perfilCuid">
                    <div id="idTitPerfil">
                        <h4>Cuidadores Próximos</h4>
                    </div>
                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <p id="idNome">Rafael Martins Silva</p>
                        <p id="idIdade">30 Anos</p>
                        <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                        <p id="idAval">Nota: 4.8 </p>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <p id="idNome">João Silva</p>
                        <p id="idIdade">25 Anos</p>
                        <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                        <p id="idAval">Nota: 4.2 </p>
                    </div>

                    <div id="idImagem">
                        <img src="/img/adicionar-fotos.png" id="img"></img>
                        <p id="idNome">Maria Antonia</p>
                        <p id="idIdade">38 Anos</p>
                        <p id="idEnd">End: Rua Heinrich Hosang, nº 310</p>
                        <p id="idAval">Nota: 5.0 </p>
                    </div>

                </div>

                <div id="mapa">
                    <img src="/img/lotus.png"></img>
                </div>
            </div>

        </div>
    );
}

export default Busca_Cuidador;