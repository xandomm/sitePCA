import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/main';
import Contato from './pages/Contato/contato';
import SobreEmpresa from './pages/SobreEmpresa';
 
function Routes(){
    return(
 <BrowserRouter>
     <Switch>
         <Route path="/" exact component={Main}/>
         <Route path="/sobre-empresa" component={SobreEmpresa}/>
         <Route path="/contato" component={Contato}/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;