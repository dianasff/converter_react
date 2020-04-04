import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Converter from './pages/Converter';
import Results from './pages/Results';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Converter}/>
                <Route path='/results' exact component={Results}/>

            </Switch>   
        </BrowserRouter>
    );
    
}