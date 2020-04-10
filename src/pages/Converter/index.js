import React , {useState, useEffect} from 'react';
import './styles.css';
import api from '../../service/api';
import logoimg from '../../assets/logo_c.png'
import Form from '../../Components/Forms'



export default function Converter(){
    //initialize quotation variable
    const [quotation, setQuotation] =useState('');
    
    //makes a call to the api to get daily dollar currency
    useEffect(()=>{
        api.get().then(response =>{
            setQuotation(Number.parseFloat(response.data.USD.ask).toFixed(2));
        })
    })

    
    return(
        <div className='principal'>
            <div className='content'>
                <section>
                    <img src={logoimg} alt=' logo Converter App' />
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    <h2>Instruções:</h2>
                    <ul>
                        <li> 1º Insira o valor , em dólar, que deseja converter.</li>
                        <li> 2º Insira a taxa do estado. </li>
                        <li><h3>Valor do dólar hoje: R$   {quotation} </h3></li>
                    </ul>
                     
                </section>
                <div className='form'>
                    <Form  />
                </div>
                
            </div>
        </div>
    );
}