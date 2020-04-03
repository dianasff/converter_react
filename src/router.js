import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Converter from './pages/Converter';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Converter}/>

            </Switch>   
        </BrowserRouter>
    );
    
}