import React, { useEffect } from 'react';
import '../../css/solicitacoes.css';

function Solicitacoes() {

    const tipoUsuario = localStorage.getItem("tipoUsuario");
    const id = localStorage.getItem("id");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/busca/solicitacoes", true);

    // Envia a informação do cabeçalho junto com a requisição.
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.addEventListener("load", function () {

        var resposta = xhr.responseText;

        var respostaJson = JSON.parse(resposta);

        console.log("solicitacoes: " + respostaJson.solicitacoes[0]);

        if (respostaJson.error) {

            console.log(respostaJson.error);

        } else if (respostaJson.solicitacoes == ''){
            document.getElementById("idFormSolicitacoes").style.display = "none";

        } else {
            document.getElementById("semSolicitacao").style.display = "none";
            console.log("ooooooooooooooooooooooo")
            console.log("Resposta: " + xhr.response);
        }
    });

    xhr.send("tipoUsuario=" + tipoUsuario + "&id=" + id);

    return (
        <div>
            <div id="idFormSolicitacoes">
                <div id="idPrimeiraDiv">
                    <div id="idSegundaDiv">
                        <h3 id="idSolicitacao"><b>Solicitações de Serviço</b></h3>
                        <div id="idContainerSetas">
                            <div className="idSeta">
                                <button><i id="idEsquerda" class="fas fa-arrow-alt-circle-left"></i></button>
                            </div>
                            <div id="idDivImg">
                                <img id="idImgEditPerfil" src="img/lotus.png" alt="" />
                            </div>
                            <div className="idSeta">
                                <button><i id="idDireita" class="fas fa-arrow-alt-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h4 id="idNomePessoa">Nome do Cliente</h4>
                    </div>
                    <div id="IdInformacoesCliente">
                        <span id="idLocalBairro">Bairro</span>
                        <br />
                        <span id="idLocalCidade">Cidade</span>
                    </div>
                    <div>
                        <h5 id="idTipo">Tipo de Cuidado</h5>
                    </div>
                    <div id="idContainerBotoes">
                        <div className="nmBotoes">
                            <button type="button"><i id="idConfirma" className="fas fa-check-circle"></i></button>
                        </div>
                        <div className="nmBotoes">
                            <button type="button"><i id="idNaoConfirma" class="far fa-times-circle"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="semSolicitacao">
                sem solicitacoes
            </div>
        </div>
    );
}

export default Solicitacoes;