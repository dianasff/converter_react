import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Converter from './pages/Converter';


export default function Routes(){
    //Has a route the the main page, it initialize the app the with the converter page, but it can be changed
    //We can make as many routes as desired, using this route controller 
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Converter}/>
            </Switch>   
        </BrowserRouter>
    );
    
}