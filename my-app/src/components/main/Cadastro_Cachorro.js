import React from 'react';
import '../../../src/css/cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro_Cachorro() {
    return (
        <div id="idCachorro">
            <form className="container">
                <h1>Cadastro Cuidador: Cachorro</h1>
                
                <label id="idValSer" htmlFor="idValorServico">Valor do serviço: </label>
                <label id="idLocCui" htmlFor="idLocalCuidado">Local de trabalho: </label>
                <label id="idTam" htmlFor="idTamanho">Tamanho: </label>
                <form id="idFormIdoso">
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
                </form>
                <br /><br />
                <label htmlFor="idDescricao">Descreva sobre você</label><br />
                <textarea name="nmDescricao" id="idDescricao" cols="70" rows="5" className="form-control" ></textarea>
                <br /><br />
                <div id="idPeriodo_trabalho">
                    <h4><b>Selecione os dias e o período que você deseja trabalhar</b></h4>

                    <table className="tabela_Periodo">
                        <div>
                            <tr>
                                <th>
                                </th>
                                <th>
                                    <label htmlFor="idDomingo" id="idDomingo">Domingo</label>
                                </th>
                                <th>
                                    <label htmlFor="idSegunda" id="idSegunda">Segunda</label>
                                </th>
                                <th>
                                    <label htmlFor="idTerca" id="idTerca">Terça</label>
                                </th>
                                <th>
                                    <label htmlFor="idQuarta" id="idQuarta">Quarta</label>
                                </th>
                                <th>
                                    <label htmlFor="idQuinta" id="idQuinta">Quinta</label>
                                </th>
                                <th>
                                    <label htmlFor="idSexta" id="idSexta">Sexta</label>
                                </th>
                                <th>
                                    <label htmlFor="idSábado" id="idSabado">Sábado</label>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="manha" htmlFor="idManha">Manhã</label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoManha" name="nmDomingoManha" className="form-control"/>
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaManha" name="nmTercaManha" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaManha" name="nmSextaManha" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" className="form-control" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="tarde" htmlFor="idTarde">Tarde</label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" className="form-control" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="noite" htmlFor="idNoite">Noite</label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" className="form-control" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" className="form-control" />
                                </th>
                            </tr>
                        </div>
                    </table>
                </div>
                <br />
                <Link to="/cad_idoso"><button className="btn btn-outline-primary" value="Retroceder" id="idBtnRetroceder">Retroceder</button></Link>
                <button className="btn btn-outline-primary" value="Avancar" id="idBtnAvancar">Avançar</button>
            </form>
        </div>
    );
}

export default Cadastro_Cachorro;
