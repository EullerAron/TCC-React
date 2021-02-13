import React from 'react';
import '../../css/perfil_cuidador.css';
import { Redirect } from 'react-router';

function Perfil_Cuidador(props) {

    if (document.getElementById("PerfCuidCorpo")){
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
                var user = respostaJson.user;
                var perfilCuidador = respostaJson.perfilCuidador;
                console.log(user.nome);
                console.log(perfilCuidador);
    
                document.getElementById("nome").textContent = "Nome: " + user.nome;
                document.getElementById("endereco").textContent = user.bairro + " " + user.cidade;
                document.getElementById("descricaoCuidador").textContent = perfilCuidador.descricao;
                document.getElementById("tituloSobre").textContent = "Sobre " + user.nome;
    
                if (perfilCuidador.domingoManha == false) {
                    document.getElementById("idDomingoManha").style.backgroundColor = "green";
                }
    
            }
        });
    
        xhr.send("idPerfilCuidador=" + idPerfilCuidador + "&tipoCuidado=" + tipoCuidado);
    }

    const reservar = function () {
        const token = localStorage.getItem("token");

        if(!token){
            alert("Você precisa estar logado para fazer umsa reserva!")
        } else {
            const data = document.getElementById("data").value;
            const idUsuarioCliente = localStorage.getItem("id");
            const idUsuarioCuidador = props.idPerfilCuidador;
            const tipo = props.tipoCuidado;
    
            var xhr = new XMLHttpRequest();
    
            xhr.open("POST", "/cadastro/servico", true);
    
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
            xhr.addEventListener("load", function () {
    
                console.log("Resposta: " + xhr.response);
    
                var resposta = xhr.response;
    
                var respostaJson = JSON.parse(resposta);
    
                if (respostaJson.error) {
                    console.log(respostaJson.error);
                } else {
                    alert("Solicitação feita com sucesso! ");
                    setReservado(true);

                }
            });
    
            xhr.send("data=" + data + "&idUsuarioCuidador=" + idUsuarioCuidador
                + "&idUsuarioCliente=" + idUsuarioCliente + "&tipo=" + tipo);
        }

    }

    const [ reservado, setReservado ] = React.useState(false);

    if (reservado){
        return <Redirect push to="/" />;
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
                    <div id="">
                        <button type="button" class="btn btn-outline-primary" id="btReservar" onClick={reservar}>RESERVAR</button>
                    </div>

                    <div id="disponibilidade">
                        <p>Escolha a data do serviço:</p>
                    </div>
                    <div id="calendario">
                        <form>
                            <div>
                                <input type="date" id="data" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

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
                    <th id="idDomingoManha">

                    </th>
                    <th>
                        <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idTercaManha" name="nmTercaManha" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSextaManha" name="nmSextaManha" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" disabled="disabled" />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label id="tarde" htmlFor="idTarde">
                            Tarde
                            </label>
                    </th>
                    <th>
                        <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" disabled="disabled" />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label id="noite" htmlFor="idNoite">
                            Noite
                            </label>
                    </th>
                    <th>
                        <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" disabled="disabled" />
                    </th>
                    <th>
                        <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" disabled="disabled" />
                    </th>
                </tr>
            </table>

        </div>
    );
}

export default Perfil_Cuidador;