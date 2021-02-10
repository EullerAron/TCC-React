import React from 'react';
import '../../css/servicos.css'

function Servicos() {
    return (
        <div>
            <div id="idContainer">

                <div id="idTitulo">
                    <h1>Nossos Serviços</h1>
                </div>

                <div id="idServicos">
                    <div id="idOpcao">
                        <div id="idSubTitulo">
                            <h4>Criança</h4>
                        </div>
                        <img src="/img/crianca.png" id="idImg" />
                    </div>

                    <div id="idOpcao">
                        <h4 id="idSubTitulo">Idoso</h4>
                        <img src="/img/idoso.png" id="idImg" />
                    </div>

                    <div id="idOpcao">
                        <h4 id="idSubTitulo">Dogs</h4>
                        <img src="/img/dogs.png" id="idImg" />
                    </div>

                </div>
            </div>

        </div>
    );

};


export default Servicos;
