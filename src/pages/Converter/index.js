import React , {useState} from 'react';
import {useHistory}  from 'react-router-dom';
import './styles.css';
import api from '../../service/api';


export default function Converter(){
    const [value, setValue]=useState('');
    const [tax, setTax]= useState('');
    const [type, setType] =useState('');
    
    const history=useHistory();
    
    
    async function handleSubmit(evt){
        evt.preventDefault();
        try{
            const response = await api.get();
            console.log(response.data.USD.ask);
            if(type === 'money'){  
                const iof= '1.1%';  
                const total_dolar_notax= [value + (value*tax)] ;
                const total_dolar_tax= [value + (value*tax)]*0.011 ;
                const total_reais_tax= ([value + (value*tax)]*0.011)*5.05 ;
                localStorage.setItem('quotation', response.data.USD.ask);
                localStorage.setItem('total_dolar_notax', total_dolar_notax);
                localStorage.setItem('total_dolar_notax', total_dolar_notax);
                localStorage.setItem('total_dolar_tax', total_dolar_tax);
                localStorage.setItem('total_reais_tax', total_reais_tax);
                localStorage.setItem('iof', iof);
            }
            if(type === 'card'){  
                const iof= '6.4%';  
                const total_dolar_notax= [value + (value*tax)] ;
                const total_dolar_tax= [value + (value*tax)]*0.064 ;
                const total_reais_tax= ([value + (value*tax)]*0.064)*5.05 ;
                localStorage.setItem('total_dolar_notax', total_dolar_notax);
                localStorage.setItem('total_dolar_tax', total_dolar_tax);
                localStorage.setItem('total_reais_tax', total_reais_tax);
                localStorage.setItem('iof', iof);
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
                    
                    <h1>Converter App</h1>
                    <p>Esse é o Converter App, sua aplicação para conversão de valores de Dólar para Real!</p>
                    <h2>Instruções:</h2>
                    <ul>
                        <li>Insira o valor , em dolar, que deseja converter</li>
                        <li>Insira a taxa do estado </li>
                    </ul>
                    
                </section>
                <form >
                    <input  
                        placeholder='Valor em dólar' required                    
                        value={value}
                        onChange={evt=> setValue(evt.target.value)}
                    />
                    <input  
                        placeholder='Taxa do estado' required  
                        value={tax}
                        onChange={evt=> setTax(evt.target.value)}
                    />
                    <div className='radio'>
                        <label htmlFor='money'>Dinheiro:</label>
                        <input 
                            type='radio' id='money' name='payment_type' value='money' required
                            onChange={evt=> setType(evt.target.value)}
                        />
                        <label htmlFor='card'>Cartão:</label>
                        <input 
                            type='radio' id='card' name='payment_type' value='card' required
                            onChange={evt=> setType(evt.target.value)}
                        />
                    </div>
                    
                        <button onClick={handleSubmit} className='button'>
                            Converter
                        </button>
                    
                </form>
            </div>
        </div>
    );
}