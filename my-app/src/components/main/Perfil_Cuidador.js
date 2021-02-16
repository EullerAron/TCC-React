import React, { useEffect } from 'react';
import '../../css/perfil_cuidador.css';
import { Redirect } from 'react-router';

function Perfil_Cuidador(props) {
    var globalUser;

    useEffect(() => {
        if(document.getElementById("PerfCuidCorpo") !== null) {

            const idPerfilCuidador = props.idPerfilCuidador;
            const tipoCuidado = props.tipoCuidado;
            console.log(idPerfilCuidador);
            console.log(tipoCuidado);
        
            var xhr = new XMLHttpRequest();
        
            xhr.open("POST", "/busca/perfil_cuidador", true);
        
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
            xhr.addEventListener("load", function () {
        
                console.log("Resposta: " + xhr.response);
        
                var resposta = xhr.response;
        
                var respostaJson = JSON.parse(resposta);
        
                if (respostaJson.error) {
                    console.log(respostaJson.error);
                } else {
                    console.log("entrou aqui")
                    var user = respostaJson.user;
                    var perfilCuidador = respostaJson.perfilCuidador;
                    console.log(user.nome);
                    console.log(perfilCuidador);
                    globalUser = user;
    
                    if(document.getElementById("nome") !== null) {
                        document.getElementById("nome").textContent = "Nome: " + user.nome;
                        document.getElementById("endereco").textContent = user.bairro + ", " + user.cidade;
                        document.getElementById("descricaoCuidador").textContent = perfilCuidador.descricao;
                        document.getElementById("tituloSobre").textContent = "Sobre " + user.nome;
                        document.getElementById("valor").textContent = "Valor: R$" + perfilCuidador.valor;
            
                        if (perfilCuidador.domingoManha == true) {
                            document.getElementById("idDomingoManha").checked = true;
                        }
                        if (perfilCuidador.segundaManha == true) {
                            document.getElementById("idSegundaManha").checked = true;
                        }
                        if (perfilCuidador.tercaManha == true) {
                            document.getElementById("idTercaManha").checked = true;
                        }
                        if (perfilCuidador.quartaManha == true) {
                            document.getElementById("idQuartaManha").checked = true;
                        }
                        if (perfilCuidador.quintaManha == true) {
                            document.getElementById("idQuintaManha").checked = true;
                        }
                        if (perfilCuidador.sextaManha == true) {
                            document.getElementById("idSextaManha").checked = true;
                        }
                        if (perfilCuidador.sabadoManha == true) {
                            document.getElementById("idSabadoManha").checked = true;
                        }
            
                        if (perfilCuidador.domingoTarde == true) {
                            document.getElementById("idDomingoTarde").checked = true;
                        }
                        if (perfilCuidador.segundaTarde == true) {
                            document.getElementById("idSegundaTarde").checked = true;
                        }
                        if (perfilCuidador.tercaTarde == true) {
                            document.getElementById("idTercaTarde").checked = true;
                        }
                        if (perfilCuidador.quartaTarde == true) {
                            document.getElementById("idQuartaTarde").checked = true;
                        }
                        if (perfilCuidador.quintaTarde == true) {
                            document.getElementById("idQuintaTarde").checked = true;
                        }
                        if (perfilCuidador.sextaTarde == true) {
                            document.getElementById("idSextaTarde").checked = true;
                        }
                        if (perfilCuidador.sabadoTarde == true) {
                            document.getElementById("idSabadoTarde").checked = true;
                        }
            
                        if (perfilCuidador.domingoNoite == true) {
                            document.getElementById("idDomingoNoite").checked = true;
                        }
                        if (perfilCuidador.segundaNoite == true) {
                            document.getElementById("idSegundaNoite").checked = true;
                        }
                        if (perfilCuidador.tercaNoite == true) {
                            document.getElementById("idTercaNoite").checked = true;
                        }
                        if (perfilCuidador.quartaNoite == true) {
                            document.getElementById("idQuartaNoite").checked = true;
                        }
                        if (perfilCuidador.quintaNoite == true) {
                            document.getElementById("idQuintaNoite").checked = true;
                        }
                        if (perfilCuidador.sextaNoite == true) {
                            document.getElementById("idSextaNoite").checked = true;
                        }
                        if (perfilCuidador.sabadoNoite == true) {
                            document.getElementById("idSabadoNoite").checked = true;
                        }
                    }
        
                }
            });
        
            xhr.send("idPerfilCuidador=" + idPerfilCuidador + "&tipoCuidado=" + tipoCuidado);
        }

    });

    const preReservar = function(){

        const token = localStorage.getItem("token");

        if(!token){
            alert("Você precisa estar logado para fazer uma reserva!");
        } else {

            const idUsuarioCliente = localStorage.getItem("id");

            var xhr = new XMLHttpRequest();

            xhr.open("GET", "busca/user/" + idUsuarioCliente);
        
            xhr.addEventListener("load", function () {
        
                var resposta = xhr.responseText;
                console.log(resposta);;

                var resp = JSON.parse(resposta);

                console.log("userrrrrrrr" + resp.nome);

                if (resp.error) { //Testa se o User foi encontrado no DB
                    console.log(resp.error);
                } else {
                    const nomeCliente = resp.nome;
                    const bairroCliente = resp.bairro;
                    const cidadeCliente = resp.cidade;
                    const telefoneCliente = resp.celular;

                    console.log("prereservar "+ nomeCliente + bairroCliente + cidadeCliente);

                    reservar(nomeCliente, bairroCliente, cidadeCliente, telefoneCliente);
                }
            });
        
            xhr.send();
        }
    }


    const reservar = function (nomeCliente, bairroCliente, cidadeCliente, telefoneCliente) {

        console.log("Entrou na reserva");

        const data = document.getElementById("data").value;
        const idUsuarioCliente = localStorage.getItem("id");
        const idUsuarioCuidador = props.idPerfilCuidador;
        const tipo = props.tipoCuidado;
        const localCuidado = props.localCuidado;
        const aceite = false;

        console.log("testando variaveis  "+ data + idUsuarioCliente + idUsuarioCuidador + tipo+ localCuidado);

        var xhr1 = new XMLHttpRequest();

        xhr1.open("POST", "/cadastro/servico", true);

        xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr1.addEventListener("load", function () {

            console.log("Resposta: " + xhr1.response);

            var resposta = xhr1.response;

            var respostaJson = JSON.parse(resposta);

            if (respostaJson.error) {
                console.log(respostaJson.error);
            } else {
                alert("Solicitação feita com sucesso! ");
                setReservado(true);
            }
        });

        xhr1.send("data=" + data + "&idUsuarioCuidador=" + idUsuarioCuidador + "&aceite=" + aceite
        + "&idUsuarioCliente=" + idUsuarioCliente + "&tipo=" + tipo + "&nomeCliente=" + nomeCliente
        + "&bairroCliente=" + bairroCliente + "&cidadeCliente=" + cidadeCliente + "&localCuidado=" + localCuidado + "&telefoneCliente=" + telefoneCliente
        + "&nomeCuidador=" + globalUser.nome + "&bairroCuidador=" + globalUser.bairro + "&cidadeCuidador=" + globalUser.cidade + "&telefoneCuidador=" + globalUser.celular
        
        );

    }

    const [ reservado, setReservado ] = React.useState(false);

    if (reservado){
        return <Redirect push to="/" />;
    }

    function habilitaDate(){
        if (document.getElementById("data").value !== "") {
            document.getElementById("btReservar").disabled = false;  
            document.getElementById("btReservar").addEventListener('click' , function(){
                preReservar()
            })          
        }else{
            document.getElementById("btReservar").setAttribute("disabled", "disabled");
        }
    }

    return (
        <div>

            <div id="PerfCuidCorpo">
                <div id="ladoEsquerdo">
                    <div id="avaliacao">
                        <div id="QuadroFoto">
                            <img src="/img/adicionar-fotos.png" id="foto"></img>
                        </div>

                        <div id="end">
                            <p id="nome"> João José</p> <br />
                            <p id="endereco"> Rua Coronel Vida Ramos nº 444</p> <br />
                            <p><b>Nota:</b> 4.8</p> <br />
                            <p id="valor">Valor: R$</p>
                        </div>
                    </div>

                    <div id="descricao">
                        <div id="idSobre">
                            <p id="tituloSobre"><b>Sobre João Oliveira:</b></p>
                        </div>

                        <div id="idSobreDescri">
                            <p id="descricaoCuidador">
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="ladoDireito">

                    <div id="disponibilidade">
                        <p>Dias e períodos disponíveis:</p>
                    </div>

                    <div id="dispCuidador">
                        <table className="tabela_Periodo_Perfil">
                            <tr>
                                <th>
                                </th>
                                <th>
                                    <label htmlFor="idDomingo" id="idDomingo">Dom </label>
                                </th>
                                <th>
                                    <label htmlFor="idSegunda" id="idSegunda">Seg </label>
                                </th>
                                <th>
                                    <label htmlFor="idTerca" id="idTerca">Ter </label>
                                </th>
                                <th>
                                    <label htmlFor="idQuarta" id="idQuarta">Qua </label>
                                </th>
                                <th>
                                    <label htmlFor="idQuinta" id="idQuinta">Qui </label>
                                </th>
                                <th>
                                    <label htmlFor="idSexta" id="idSexta">Sex </label>
                                </th>
                                <th>
                                    <label htmlFor="idSábado" id="idSabado">Sáb </label>
                                </th>
                            </tr>
                            <tr id="linhas">
                                <th>
                                    <label id="manha" htmlFor="idManha">Manhã</label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoManha" name="nmDomingoManhaa" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaManha" name="nmTercaManha" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaManha" name="nmSextaManha" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" className="checkDisp" disabled="disabled" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="tarde" htmlFor="idTarde">
                                        Tarde
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" className="checkDisp" disabled="disabled" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="noite" htmlFor="idNoite">
                                        Noite
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" className="checkDisp" disabled="disabled" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" className="checkDisp" disabled="disabled" />
                                </th>
                            </tr>
                        </table>
                    </div>

                    <div id="dataServ">
                        <p>Escolha a data do serviço:</p>
                    </div>
                    <div id="calendario">
                        <form>
                            <div>
                                <input type="date" id="data" onBlur={habilitaDate} />
                            </div>
                        </form>
                    </div>

                    <div id="">
                        <button type="button" className="btn btn-success" id="btReservar" disabled="true" onClick={reservar}>RESERVAR</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Perfil_Cuidador;