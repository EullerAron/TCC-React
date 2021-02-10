import React from 'react';
import '../../css/perfil_cuidador.css';

function Perfil_Cuidador() {
    return (
        <div>

            <div id="PerfCuidCorpo">
                <div id="ladoEsquerdo">
                    <div id="avaliacao">
                        <div id="QuadroFoto">
                            <img src="/img/adicionar-fotos.png" id="foto"></img>
                            <p id="nome">João Oliveira</p>
                        </div>

                        <div id="end">
                            <p><b>Nome:</b> João José</p> <br/>
                            <p><b>Endereço:</b> Rua Coronel Vida Ramos nº 444</p> <br/>
                            <p><b>Nota:</b> 4.8</p> <br/>
                            

                        </div>
                    </div>

                    <div id="descricao">
                        <div id="idSobre">
                            <p id=""><b>Sobre João Oliveira:</b></p>
                        </div>

                        <div id="idSobreDescri">
                            <p id="texto">
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="ladoDireito">
                    <div id="">
                        <a class="btn btn-outline-primary" href="https://web.whatsapp.com/send?phone=5541999995620" target="_blank" role="button" id="btWhats">
                            INICIAR CONVERSA  <i className="fa fa-whatsapp" id="icone" />
                        </a>
                        <button type="button" class="btn btn-outline-primary" id="btReservar">RESERVAR</button>
                    </div>

                    <div id="disponibilidade">
                        <p>Disponibilidade:</p>
                    </div>
                    <div id="calendario">
                        <form>
                            <div>
                                <input type="date" id="dia" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Perfil_Cuidador;