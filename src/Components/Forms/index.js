import React from 'react';
import './styles.css';
import useForms from './useForms';

//this component is used at converter page 
const Form = () =>{
    //useForms controls input, submittion and variables    
    // functions and variables imported from useForms controller
    const {handleChange, handleSubmit, values,results}=useForms();
    return(
        
        <div className='content'>
                
                <form onSubmit={handleSubmit} >
                    <label className='form-label' htmlFor='valor'>Valor em dólar ($): </label>
                    {/* Used Pattern to avoid undesirable input  */}
                    <input  
                        placeholder='Valor em dólar' required="required"
                        name='amount'
                        id='valor'
                        type='text'
                        maxLength='12'
                        minLength='1'
                        pattern="\d+(\.\d{2})?" 
                        title='Não é permitido o uso de sinais, use números e ponto(.) para separar decimal. ' 
                        value={values.amount}
                        onChange={handleChange}
                    />
                    <label className='form-label' htmlFor='valor'>Taxa do estado (em %): </label>
                    {/*Used Pattern to avoid undesirable input  */}
                    <input  
                        placeholder='Taxa do estado %' required="required"  
                        name='tax'
                        type='text'
                        id='taxa'
                        maxLength='4'
                        minLength='1'
                        pattern="\d{1}\.\d{2}" 
                        title='Digite uma taxa no formato #.## Ex:6.65, use ponto(.), para separar decimais'
                        value={values.tax}
                        onChange={handleChange}
                    />
                    <div className='radio'>
                        <label htmlFor='money'>Dinheiro:</label>
                        <input 
                            type='radio' id='money' name='type' value='1.1' required="required"
                            onChange={handleChange}
                        />
                        <label htmlFor='card'>Cartão:</label>
                        <input 
                            type='radio' id='card' name='type' value='6.4' required="required"
                            onChange={handleChange}
                        />
                    </div>
                    
                        <button   type='submit' className='button'>
                            Converter
                        </button>
                    
                </form>
                    {/*Logic to display results when we have results   */}
                     <div className={`${results.show && 'showresults'}`}>
                        <h1>RESULTADOS:</h1>
                        <ul>
                            <li>Cotação em dólar: <span> R$  {results.quotation} </span> </li>
                            <li>IOF: <span> {results.iof}% </span> </li>
                            <li>Total em dólar sem imposto: <span>$ {results.total_dolar_notax} dólares </span> </li> 
                            <li>Total em dólar com imposto: <span>$ {results.total_dolar_tax} dólares </span> </li>
                            <li>Total em reais sem imposto: <span>R$  {results.total_reais_notax} reais </span> </li>
                            <li>Total em reais com imposto: <span>R$ {results.total_reais_tax} reais </span> </li> 
        
                        </ul>
                    
                    </div>
                    
        </div>
    );
}
export default Form;