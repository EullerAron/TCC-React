import React from 'react';
import '../../../src/css/cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro_Crianca() {
    return (
        <div id="idCrianca">
            <form id="formCuidador">
                <h1>Cadastro Cuidador: Criança</h1>
                <br /><br />
                <label id="idValSer" htmlFor="idValorServico">Valor do serviço: </label>
                <label id="idLocCui" htmlFor="idLocalCuidado">Local de trabalho: </label>
                <label id="idGen" htmlFor="idGenero">Sexo: </label>
                <div id="idFormIdoso">
                    <input type="number" id="idValorServico" name="nmValorServico" className="form-control" />

                    <select id="idLocalCuidado" name="nmLocalCuidado" className="form-control" >
                        <option value="minhaCasa">Minha Casa</option>
                        <option value="casaCliente">Casa do Cliente</option>
                    </select>
                    <br />
                    <select name="nmGenero" id="idGenero" className="form-control" >
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <br /><br />
                <label htmlFor="idDescricao">Descreva sobre você</label><br />
                <textarea name="nmDescricao" id="idDescricao" cols="70" rows="5" className="form-control" ></textarea>
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
                                    <input type="checkbox" id="idDomingoManha" name="nmDomingoManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaManha" name="nmSegundaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaManha" name="nmTercaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaManha" name="nmQuartaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaManha" name="nmQuintaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaManha" name="nmSextaManha" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoManha" name="nmSabadoManha" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="tarde" htmlFor="idTarde">
                                        Tarde
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoTarde" name="nmDomingoTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaTarde" name="nmSegundaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaTarde" name="nmTercaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaTarde" name="nmQuartaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaTarde" name="nmQuintaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaTarde" name="nmSextaTarde" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoTarde" name="nmSabadoTarde" />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label id="noite" htmlFor="idNoite">
                                        Noite
                            </label>
                                </th>
                                <th>
                                    <input type="checkbox" id="idDomingoNoite" name="nmDomingoNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSegundaNoite" name="nmSegundaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idTercaNoite" name="nmTercaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuartaNoite" name="nmQuartaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idQuintaNoite" name="nmQuintaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSextaNoite" name="nmSextaNoite" />
                                </th>
                                <th>
                                    <input type="checkbox" id="idSabadoNoite" name="nmSabadoNoite" />
                                </th>
                            </tr>
                    </table>
                </div>
                <br />
                <Link to="/cad_cuidador"><button className="btn btn-outline-primary" value="Retroceder" id="idBtnRetroceder">Retroceder</button></Link>
                <Link to="/cad_idoso"><button className="btn btn-outline-primary" value="Avancar" id="idBtnAvancar">Avançar</button></Link>
            </form>
        </div>
    );
}

export default Cadastro_Crianca;
