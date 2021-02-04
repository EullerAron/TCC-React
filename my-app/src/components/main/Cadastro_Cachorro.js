import React from 'react';
import '../../../src/css/cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro_Cachorro(props) {

    var cadastrarCuidadorCachorro = function () {
        //componentes do cadastro de usuario
        var idCuidador = props.idUsuario;
        var valor = document.getElementById("idValorServico").value;
        var localCuidado = document.getElementById("idLocalCuidado").value;
        var tamanho = document.getElementById("idTamanho").value;
        var domingoManha = document.getElementById("idDomingoManha").checked;
        var segundaManha = document.getElementById("idSegundaManha").checked;
        var tercaManha = document.getElementById("idTercaManha").checked;
        var quartaManha = document.getElementById("idQuartaManha").checked;
        var quintaManha = document.getElementById("idQuintaManha").checked;
        var sextaManha = document.getElementById("idSextaManha").checked;
        var sabadoManha = document.getElementById("idSabadoManha").checked;
        var domingoTarde = document.getElementById("idDomingoTarde").checked;
        var segundaTarde = document.getElementById("idSegundaTarde").checked;
        var tercaTarde = document.getElementById("idTercaTarde").checked;
        var quartaTarde = document.getElementById("idQuartaTarde").checked;
        var quintaTarde = document.getElementById("idQuintaTarde").checked;
        var sextaTarde = document.getElementById("idSextaTarde").checked;
        var sabadoTarde = document.getElementById("idSabadoTarde").checked;
        var domingoNoite = document.getElementById("idDomingoNoite").checked;
        var segundaNoite = document.getElementById("idSegundaNoite").checked;
        var tercaNoite = document.getElementById("idTercaNoite").checked;
        var quartaNoite = document.getElementById("idQuartaNoite").checked;
        var quintaNoite = document.getElementById("idQuintaNoite").checked;
        var sextaNoite = document.getElementById("idSextaNoite").checked;
        var sabadoNoite = document.getElementById("idSabadoNoite").checked;

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "cadastro/cuidador/cachorro", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

            var resposta = xhr.responseText;

            console.log("Resposta: " + xhr.response);

            var resp = JSON.parse(resposta);

            console.log("cadastro perfil cuidador cachorro: " + resposta);

            if (resp.error){
                console.log(resp.error);
            } else {
                console.log(props.idUsuario)
            }
        
        });

        xhr.send("idCuidador="+idCuidador+"&valor="+valor+"&localCuidado="+localCuidado+"&tamanho="+tamanho
        +"&domingoManha="+domingoManha+"&segundaManha="+segundaManha+"&tercaManha="+tercaManha+"&quartaManha="+quartaManha+"&quintaManha="+quintaManha+"&sextaManha="+sextaManha+"&sabadoManha="+sabadoManha
        +"&domingoTarde="+domingoTarde+"&segundaTarde="+segundaTarde+"&tercaTarde="+tercaTarde+"&quartaTarde="+quartaTarde+"&quintaTarde="+quintaTarde+"&sextaTarde="+sextaTarde+"&sabadoTarde="+sabadoTarde
        +"&domingoNoite="+domingoNoite+"&segundaNoite="+segundaNoite+"&tercaNoite="+tercaNoite+"&quartaNoite="+quartaNoite+"&quintaNoite="+quintaNoite+"&sextaNoite="+sextaNoite+"&sabadoNoite="+sabadoNoite
        );
    }

    return (
        <div id="idCachorro">
            <form id="formCuidador">
                <h1>Cadastro Cuidador: Cachorro</h1>
                <br /><br />
                <label id="idValSer" htmlFor="idValorServico">Valor do serviço: </label>
                <label id="idLocCui" htmlFor="idLocalCuidado">Local de trabalho: </label>
                <label id="idTam" htmlFor="idTamanho">Tamanho: </label>
                <div id="idFormIdoso">
                    <input type="number" id="idValorServico" name="nmValorServico" className="form-control" />

                    <select id="idLocalCuidado" name="nmLocalCuidado" className="form-control" >
                        <option value="minhaCasa">Minha Casa</option>
                        <option value="casaCliente">Casa do Cliente</option>
                    </select>
                    <br />
                    <select name="nmTamanho" id="idTamanho" className="form-control" >
                        <option value="pequeno">Pequeno</option>
                        <option value="medio">Médio</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>
                <br /><br />
                <label htmlFor="idDescricao">Descreva sobre você</label><br />
                <textarea name="nmDescricao" id="idDescricao" cols="70" rows="5" className="form-control" ></textarea>
                <br /><br />
                <h4><b>Selecione os dias e o período que você deseja trabalhar</b></h4>
                <div id="idPeriodo_trabalho">
                    <table className="tabela_Periodo">
                            <tr>
                                <th>
                                </th>
                                <th>
                                    <label htmlFor="idDomingo" id="idDomingo">Domingo </label>
                                </th>
                                <th>
                                    <label htmlFor="idSegunda" id="idSegunda">Segunda </label>
                                </th>
                                <th>
                                    <label htmlFor="idTerca" id="idTerca">Terça </label>
                                </th>
                                <th>
                                    <label htmlFor="idQuarta" id="idQuarta">Quarta </label>
                                </th>
                                <th>
                                    <label htmlFor="idQuinta" id="idQuinta">Quinta </label>
                                </th>
                                <th>
                                    <label htmlFor="idSexta" id="idSexta">Sexta </label>
                                </th>
                                <th>
                                    <label htmlFor="idSábado" id="idSabado">Sábado </label>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="manha" htmlFor="idManha">
                                        Manhã
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoManha" name="nmDomingoManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaManha" name="nmTercaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaManha" name="nmSextaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="tarde" htmlFor="idTarde">
                                        Tarde
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="noite" htmlFor="idNoite">
                                        Noite
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" />
                                </th>
                            </tr>
                    </table>
                </div>
                <br />
                <Link to="/cad_cuidador"><button className="btn btn-outline-primary" value="Retroceder" id="idBtnRetroceder">Retroceder</button></Link>
                <Link to="/cad_crianca"><button className="btn btn-outline-primary" value="Avancar" id="idBtnAvancar" onClick={cadastrarCuidadorCachorro}>Avançar</button></Link>
            </form>
        </div>
    );
}

export default Cadastro_Cachorro;
