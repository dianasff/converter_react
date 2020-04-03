import React, {useState} from 'react';
import {Link, useHistory}  from 'react-router-dom';
import './styles.css';


export default function Converter(){


    return(
        <div className='principal'>
            <div className='content'>
                <section>
                    
                    <h1>Converter App</h1>
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    <h2>Instruções:</h2>
                    <ul>
                        <li>Insira o valor , em dolar, que deseja converter</li>
                        <li>Insira a taxa do estado </li>
                    </ul>
                    
                </section>
                <form onSubmit={handleConvert}>
                    <input  
                        placeholder='Valor em dólar'                       
                    />
                    <input  
                        placeholder='Taxa do estado'   
                    />
                    <button className='button'>
                        Converter
                    </button>
                </form>
            </div>
        </div>
    );
}