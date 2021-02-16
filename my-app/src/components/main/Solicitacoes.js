import React, { useEffect } from 'react';
import '../../css/solicitacoes.css';

function Solicitacoes() {
    
    const [ contato, setContato ] = React.useState("");
    var globalSolicitacao;

    const tipoUsuario = localStorage.getItem("tipoUsuario");
    const id = localStorage.getItem("id");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/busca/solicitacoes", true);

    // Envia a informação do cabeçalho junto com a requisição.
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.addEventListener("load", function () {

        var resposta = xhr.responseText;

        var respostaOBJ = JSON.parse(resposta);

        if (respostaOBJ.error) {

            console.log(respostaOBJ.error);

        } else if (respostaOBJ.length > 0){
            console.log(respostaOBJ);
            
            document.getElementById("semSolicitacao").style.display = "none";
            adcSolicitacao(respostaOBJ);
            globalSolicitacao = respostaOBJ;
            console.log("idFormSolicitacoes-----------" + globalSolicitacao);

        } else {
            document.getElementById("idFormSolicitacoes").style.display = "none";
        }
    });

    xhr.send("tipoUsuario=" + tipoUsuario + "&id=" + id);

    const adcSolicitacao = function (solicitacoes) {
        const nome = document.getElementById("idNomePessoa");
        const bairro = document.getElementById("idLocalBairro");
        const cidade = document.getElementById("idLocalCidade");
        const tipoCuidado = document.getElementById("idTipo");

        nome.textContent = solicitacoes[0].nomeCliente;
        bairro.textContent = solicitacoes[0].bairroCliente;
        cidade.textContent = solicitacoes[0].cidadeCliente;
        tipoCuidado.textContent = solicitacoes[0].tipo;

    }

    const aceitarServico = function () {
        console.log("entrou na função ")
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/solicitacao/aceitar", true);
    
        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
        xhr.addEventListener("load", function () {
    
            var resposta = xhr.responseText;
    
            var respostaOBJ = JSON.parse(resposta);
    
            if (respostaOBJ.error) {
    
                console.log(respostaOBJ.error);
    
            } else {
                console.log(respostaOBJ);
                document.getElementById("idContainerBotoes").style.display = "none";
                document.getElementById("idSolicitacaoAceita").style.display = "block";
                setContato(globalSolicitacao[0].telefoneCliente);
                
            }
        });
    
        xhr.send("id=" + id);
    }

    return (
        <div>
            <div id="idFormSolicitacoes" >
                <div id="idPrimeiraDiv" >
                    <div id="idSegundaDiv" >
                        <h3 id="idSolicitacao" ><b>Solicitações de Serviço</b></h3>
                        <div id="idContainerSetas" >
                            <div className="idSeta" >
                                <button ><i id="idEsquerda" class="fas fa-arrow-alt-circle-left" ></i></button>
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
                            <button type="button" onClick={aceitarServico}><i id="idConfirma" className="fas fa-check-circle"></i></button>
                        </div>
                        <div className="nmBotoes">
                            <button type="button"><i id="idNaoConfirma" class="far fa-times-circle"></i></button>
                        </div>
                    </div>
                    <div id="idSolicitacaoAceita" hidden="true">
                        <h2>Solicitação aceita</h2>
                        <h4>Contato do cliente: {contato}</h4>
                    </div>
                </div>
            </div>

            <div id="semSolicitacao">
                <div id="idFormSemSolicitacoes">
                    <div id="idDivSemSolicitacoes">
                        <h2 id="idTituloSemSolic"><b>Sem Solicitações</b></h2>
                        <i id="idTriste"className="far fa-frown"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solicitacoes;