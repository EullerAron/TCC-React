import React from 'react';
import '../../css/solicitacoes.css';

function Card_Solicitacoes() {

    return (
        <form id="idFormSolicitacoes">
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
        </form>
    );
}

export default Card_Solicitacoes;