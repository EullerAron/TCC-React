import React, { useEffect } from 'react';
import '../../css/solicitacoes.css';
import Card_Solicitacoes from './Card_Solicitacoes';

function Solicitacoes() {

    useEffect(() => {
        const tipoUsuario = localStorage.getItem("tipoUsuario");
        const id = localStorage.getItem("id");

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/busca/solicitacoes", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

            console.log("Resposta: " + xhr.response);

            var resposta = xhr.responseText;

            var respostaJson = JSON.parse(resposta);

            console.log("solicitacoes: " + respostaJson.solicitacoes);

            if (respostaJson.error) {

                console.log(respostaJson.error);

            } else if (respostaJson.solicitacoes == ''){
                setSolicitacao("Sem Solicitações");
                console.log("foiiii: " + respostaJson);
            } else {
                setSolicitacao(<Card_Solicitacoes />);
            }
        });

        xhr.send("tipoUsuario=" + tipoUsuario + "&id=" + id);

    });

    const [ solicitacao, setSolicitacao ] = React.useState();


    return (
        <div>
            {solicitacao}
        </div>
    );
}

export default Solicitacoes;