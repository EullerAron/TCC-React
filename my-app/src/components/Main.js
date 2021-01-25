import React from 'react';
import Teste from './main/Teste'
import Teste2 from './main/Teste2'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Teste} exact />
                <Route path="/teste" component={Teste2} />
                <Route component={() => <div>Página Não Encontrada - Erro 404!</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;