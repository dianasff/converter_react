import React , {useState, useEffect} from 'react';
import {useHistory}  from 'react-router-dom';
import './styles.css';
import api from '../../service/api';
import logoimg from '../../assets/logo_c.png'


export default function Converter(){
    const [value, setValue]=useState('');
    const [tax, setTax]= useState('');
    const [type, setType] =useState('');
    const [quotation, setQuotation] =useState('');
    
    
    
    const history=useHistory();
    
    useEffect(()=>{
        api.get().then(response =>{
            setQuotation(Number.parseFloat(response.data.USD.ask).toFixed(2));
        })
    
    })
    async function handleSubmit(evt){
        evt.preventDefault();
        try{
            const response = await api.get();
            console.log(response.data.USD.ask);
            
            const calculate=(number_tax)=>{
                const total_dolar_notax = Number.parseFloat(value);
                const total_dolar_tax   =(total_dolar_notax + (total_dolar_notax*(Number.parseFloat(tax)/100)));
                const total_reais_notax =(total_dolar_tax)* Number(response.data.USD.ask);
                const total_reais_tax   =((total_reais_notax * number_tax) + total_reais_notax );
                localStorage.setItem('quotation', Number.parseFloat(response.data.USD.ask).toFixed(2));
                localStorage.setItem('total_dolar_notax', Number.parseFloat(total_dolar_notax).toFixed(2));
                localStorage.setItem('total_dolar_tax', Number.parseFloat(total_dolar_tax).toFixed(2));
                localStorage.setItem('total_reais_notax',Number.parseFloat(total_reais_notax).toFixed(2));
                localStorage.setItem('total_reais_tax', Number.parseFloat(total_reais_tax).toFixed(2));
                
            }
            
            if(type === 'money'){  
                const iof= '1.1'; 
                localStorage.setItem('iof', iof);
                calculate(0.011)
                
            }
            if(type === 'card'){  
                const iof= '6.4';
                localStorage.setItem('iof', iof);
                calculate(0.064)
            }      
            history.push('/results');
        }catch(err){
            alert("error");
            console.log(err);
        }  
    
        
    }
    return(
        <div className='principal'>
            <div className='content'>
                <section>
                    <img src={logoimg} alt=' logo Converter App' />
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    <h2>Instruções:</h2>
                    <ul>
                        <li> 1º Insira o valor , em dolar, que deseja converter</li>
                        <li> 2º Insira a taxa do estado </li>
                        <li><h3>Valor do dólar hoje: R$   {quotation} </h3></li>
                    </ul>
                    
                </section>
                <form onSubmit={handleSubmit} >
                    
                    <input  
                        placeholder='Valor em dólar' required="required"
                        id='valor'
                        type='text'
                        maxLength='12'
                        minLength='1'
                        pattern="\d+(\.\d{2})?" 
                        title='Não é permitido o uso de sinais (+) ou (-); Use números e ponto(.) para separar decimal. ' 
                        value={value}
                        onChange={evt=> setValue((evt.target.value))}
                    />
                    
                    <input  
                        placeholder='Taxa do estado' required="required"  
                        type='text'
                        id='taxa'
                        maxLength='4'
                        minLength='1'
                        pattern="\d{1}\.\d{2}" 
                        title='Não é permitido o uso de sinais (+) ou (-); Use números e ponto(.) para separar decimal. '
                        value={tax}
                        onChange={evt=> setTax((evt.target.value))}
                    />
                    <div className='radio'>
                        <label htmlFor='money'>Dinheiro:</label>
                        <input 
                            type='radio' id='money' name='payment_type' value='money' required="required"
                            onChange={evt=> setType(evt.target.value)}
                        />
                        <label htmlFor='card'>Cartão:</label>
                        <input 
                            type='radio' id='card' name='payment_type' value='card' required="required"
                            onChange={evt=> setType(evt.target.value)}
                        />
                    </div>
                    
                        <button   type='submit' className='button'>
                            Converter
                        </button>
                    
                </form>
            </div>
        </div>
    );
}