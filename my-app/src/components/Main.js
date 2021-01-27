import React from 'react';
import Teste from './main/Teste';
import Teste2 from './main/Teste2';
import Cadastro from './main/Cadastro';
import Cadastro_Cachorro from './main/Cadastro_Cachorro';
import Cadastro_Crianca from './main/Cadastro_Crianca';
import Cadastro_Cuidador from './main/Cadastro_Cuidador';
import Cadastro_Idoso from './main/Cadastro_Idoso';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Teste} exact />
                <Route path="/teste" component={Teste2} />
                <Route path="/Cadastro_Cachorro" component={Cadastro_Cachorro} />
                <Route path="/Cadastro_Crianca" component={Cadastro_Crianca} />
                <Route path="/Cadastro_Cuidador" component={Cadastro_Cuidador} />
                <Route path="/Cadastro_Idoso" component={Cadastro_Idoso} />
                <Route path="/Cadastro" component={Cadastro} />                
                <Route component={() => <div>Página Não Encontrada - Erro 404!</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;