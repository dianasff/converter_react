import React  from 'react';
import {Link}  from 'react-router-dom';
import './styles.css';


export default function Results(){
    const quotation =   localStorage.getItem('quotation');
    const iof =   localStorage.getItem('iof');
    const total_dolar_notax = localStorage.getItem('total_dolar_notax');
    const total_dolar_tax= localStorage.getItem('total_dolar_tax');
    const total_reais_tax = localStorage.getItem('total_reais_tax');
    

    return(
        <div className='principal'>
            <div className='content'>
                <section className='presentation'>
                    
                    <h1>Converter App</h1>
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    <Link className='back' to='/'>
                        Voltar
                    </Link>
                    
                </section>
                <section className='results'>
                    <h1>RESULTADOS:</h1>
                    <ul>
                        <li>Cotação em dólar:{quotation} </li>
                        <li>IOF:{iof} </li>
                        <li>Total em dólar sem imposto:{total_dolar_notax} </li>
                        <li>Total em dólar com imposto:{total_dolar_tax} </li>
                        <li>Total em reais com imposto:{total_reais_tax} </li>
                    </ul>
                    <Link className='back' to='/'>
                        <button className='button'>
                            Fazer uma nova consulta
                        </button>
                    </Link>
                    
                </section>
            </div>
        </div>
    );
}