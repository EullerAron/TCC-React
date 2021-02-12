import React from 'react';
import '../../../src/css/cadastro.css';
import { Link, Redirect } from 'react-router-dom';

function Cadastro_Idoso(props) {
    var cadastrarCuidadorIdoso = function () {
        if (document.getElementById("idHabilit").checked) { /* Condição para Habilitar os campos do formulario */
            //componentes do cadastro de usuario
            var idCuidador = props.idUsuario;
            var valor = document.getElementById("idValorServico").value;
            var localCuidado = document.getElementById("idLocalCuidado").value;
            var sexo = document.getElementById("idGenero").value;
            var descricao = document.getElementById("idDescricao").value;
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

            xhr.open("POST", "cadastro/cuidador/idoso", true);

            // Envia a informação do cabeçalho junto com a requisição.
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.addEventListener("load", function () {

                var resposta = xhr.responseText;

                console.log("Resposta: " + xhr.response);

                var resp = JSON.parse(resposta);

                console.log("cadastro perfil cuidador idoso: " + resposta);

                if (resp.error) {
                    console.log(resp.error);
                } else {
                    props.logado();
                    console.log(props.idUsuario);
                    setLogado(true);
                }

            });

            xhr.send("idCuidador=" + idCuidador + "&valor=" + valor + "&localCuidado=" + localCuidado + "&sexo=" + sexo + "&descricao=" + descricao
                + "&domingoManha=" + domingoManha + "&segundaManha=" + segundaManha + "&tercaManha=" + tercaManha + "&quartaManha=" + quartaManha + "&quintaManha=" + quintaManha + "&sextaManha=" + sextaManha + "&sabadoManha=" + sabadoManha
                + "&domingoTarde=" + domingoTarde + "&segundaTarde=" + segundaTarde + "&tercaTarde=" + tercaTarde + "&quartaTarde=" + quartaTarde + "&quintaTarde=" + quintaTarde + "&sextaTarde=" + sextaTarde + "&sabadoTarde=" + sabadoTarde
                + "&domingoNoite=" + domingoNoite + "&segundaNoite=" + segundaNoite + "&tercaNoite=" + tercaNoite + "&quartaNoite=" + quartaNoite + "&quintaNoite=" + quintaNoite + "&sextaNoite=" + sextaNoite + "&sabadoNoite=" + sabadoNoite
            );
        } else {
            props.logado();
            console.log(props.idUsuario);
            setLogado(true);
        }
    }

    function habilitar() {
        if (document.getElementById("idHabilit").checked) {
            document.getElementById("idValorServico").removeAttribute("disabled");
            document.getElementById("idLocalCuidado").removeAttribute("disabled");
            document.getElementById("idGenero").removeAttribute("disabled");
            document.getElementById("idDescricao").removeAttribute("disabled");
            document.getElementById("idDomingoManha").removeAttribute("disabled");
            document.getElementById("idSegundaManha").removeAttribute("disabled");
            document.getElementById("idTercaManha").removeAttribute("disabled");
            document.getElementById("idQuartaManha").removeAttribute("disabled");
            document.getElementById("idQuintaManha").removeAttribute("disabled");
            document.getElementById("idSextaManha").removeAttribute("disabled");
            document.getElementById("idSabadoManha").removeAttribute("disabled");
            document.getElementById("idDomingoTarde").removeAttribute("disabled");
            document.getElementById("idSegundaTarde").removeAttribute("disabled");
            document.getElementById("idTercaTarde").removeAttribute("disabled");
            document.getElementById("idQuartaTarde").removeAttribute("disabled");
            document.getElementById("idQuintaTarde").removeAttribute("disabled");
            document.getElementById("idSextaTarde").removeAttribute("disabled");
            document.getElementById("idSabadoTarde").removeAttribute("disabled");
            document.getElementById("idDomingoNoite").removeAttribute("disabled");
            document.getElementById("idSegundaNoite").removeAttribute("disabled");
            document.getElementById("idTercaNoite").removeAttribute("disabled");
            document.getElementById("idQuartaNoite").removeAttribute("disabled");
            document.getElementById("idQuintaNoite").removeAttribute("disabled");
            document.getElementById("idSextaNoite").removeAttribute("disabled");
            document.getElementById("idSabadoNoite").removeAttribute("disabled");
        } else {
            document.getElementById("idValorServico").setAttribute("disabled", "disabled");
            document.getElementById("idLocalCuidado").setAttribute("disabled", "disabled");
            document.getElementById("idGenero").setAttribute("disabled", "disabled");
            document.getElementById("idDescricao").setAttribute("disabled", "disabled");
            document.getElementById("idDomingoManha").setAttribute("disabled", "disabled");
            document.getElementById("idSegundaManha").setAttribute("disabled", "disabled");
            document.getElementById("idTercaManha").setAttribute("disabled", "disabled");
            document.getElementById("idQuartaManha").setAttribute("disabled", "disabled");
            document.getElementById("idQuintaManha").setAttribute("disabled", "disabled");
            document.getElementById("idSextaManha").setAttribute("disabled", "disabled");
            document.getElementById("idSabadoManha").setAttribute("disabled", "disabled");
            document.getElementById("idDomingoTarde").setAttribute("disabled", "disabled");
            document.getElementById("idSegundaTarde").setAttribute("disabled", "disabled");
            document.getElementById("idTercaTarde").setAttribute("disabled", "disabled");
            document.getElementById("idQuartaTarde").setAttribute("disabled", "disabled");
            document.getElementById("idQuintaTarde").setAttribute("disabled", "disabled");
            document.getElementById("idSextaTarde").setAttribute("disabled", "disabled");
            document.getElementById("idSabadoTarde").setAttribute("disabled", "disabled");
            document.getElementById("idDomingoNoite").setAttribute("disabled", "disabled");
            document.getElementById("idSegundaNoite").setAttribute("disabled", "disabled");
            document.getElementById("idTercaNoite").setAttribute("disabled", "disabled");
            document.getElementById("idQuartaNoite").setAttribute("disabled", "disabled");
            document.getElementById("idQuintaNoite").setAttribute("disabled", "disabled");
            document.getElementById("idSextaNoite").setAttribute("disabled", "disabled");
            document.getElementById("idSabadoNoite").setAttribute("disabled", "disabled");

        }
    };

    const [ logado, setLogado ] = React.useState(false);

    if (logado){
        return <Redirect push to="/" />;
    }

    return (
        <div id="idIdoso">
            <form>
                <h1>Cadastro Cuidador: Idoso</h1>
                <br /><br />
                <input type="checkbox" id="idHabilit" onClick={habilitar} />
                <label id="idDisable" htmlFor="idHabilit">Quero ser um cuidador</label>
                <br /><br />
                <label id="idValSer" htmlFor="idValorServico">Valor do serviço: </label>
                <label id="idLocCui" htmlFor="idLocalCuidado">Local de trabalho: </label>
                <label id="idGen" htmlFor="idGenero">Sexo: </label>
                <div id="idFormIdoso">
                    <input type="number" id="idValorServico" name="nmValorServico" className="form-control" disabled="disabled"/>

                    <select id="idLocalCuidado" name="nmLocalCuidado" className="form-control" disabled="disabled">
                        <option value="minhaCasa">Minha Casa</option>
                        <option value="casaCliente">Casa do Cliente</option>
                    </select>
                    <br />
                    <select name="nmGenero" id="idGenero" className="form-control" disabled="disabled">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <br /><br />
                <label htmlFor="idDescricao">Descreva sobre você</label><br />
                <textarea name="nmDescricao" id="idDescricao" cols="70" rows="5" className="form-control" disabled="disabled"></textarea>
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
                                <input type="checkbox" id="idDomingoManha" name="nmDomingoManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idTercaManha" name="nmTercaManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSextaManha" name="nmSextaManha" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" disabled="disabled"/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label id="tarde" htmlFor="idTarde">
                                    Tarde
                            </label>
                            </th>
                            <th>
                                <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" disabled="disabled"/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label id="noite" htmlFor="idNoite">
                                    Noite
                            </label>
                            </th>
                            <th>
                                <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" disabled="disabled"/>
                            </th>
                            <th>
                                <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" disabled="disabled"/>
                            </th>
                        </tr>
                    </table>
                </div>
                <br />
                <Link to="/cad_crianca"><button className="btn btn-outline-primary" value="Retroceder" id="idBtnRetroceder">Retroceder</button></Link>
                <button type="button" className="btn btn-outline-primary" value="Avancar" id="idBtnAvancar" onClick={cadastrarCuidadorIdoso}>Avançar</button>
            </form>
        </div>
    );
}

export default Cadastro_Idoso;