import React from 'react';
import '../../css/contato.css';

function Contato(){
    return (
        <div className="form-group" id="contato">
            <form action="">
                <h3>FALE CONOSCO</h3>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" className="form-control" id="telefone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="comentario">Comentario</label>
                    <textarea type="text" className="form-control" id="comentario"></textarea>
                </div>
                <button type="submit" className="btn btn-info">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;