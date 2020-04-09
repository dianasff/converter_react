import React from 'react';
import {useHistory}  from 'react-router-dom';
import './styles.css';
import logoimg from '../../assets/logo_c.png'


export default function Results(){
    

    const quotation =   localStorage.getItem('quotation');
    const iof =   localStorage.getItem('iof');
    const total_dolar_notax =   localStorage.getItem('total_dolar_notax');
    const total_dolar_tax =   localStorage.getItem('total_dolar_tax');
    const total_reais_notax =   localStorage.getItem('total_reais_notax');
    const total_reais_tax =   localStorage.getItem('total_reais_tax');
    const history= useHistory();
    
    function handleSubmit(){
        localStorage.clear();
        history.push('/')
    

    }
    

    return(
        <div className='principal'>
            <div className='content'>
                <section className='presentation'>
                    
                    <img src={logoimg} alt='Logo converter app'/>
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    
                    
                </section>
                <section className='results'>
                    <h1>RESULTADOS:</h1>
                    <ul>
                        <li>Cotação em dólar: R$  {quotation} </li>
                        <li>IOF:    {iof}% </li>
                        <li>Total em dólar sem imposto: U$$ {total_dolar_notax} </li> 
                        <li>Total em dólar com imposto: U$$ {total_dolar_tax} </li>
                        <li>Total em reais sem imposto: R$  {total_reais_notax} </li>
                        <li>Total em reais com imposto: R$ {total_reais_tax} </li> 
      
                    </ul>
                    
                        <button className='button' onClick={handleSubmit}>
                            Fazer uma nova consulta
                        </button>
                    
                    
                </section>
            </div>
        </div>
    );
}