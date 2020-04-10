import {useState, useEffect} from'react';
import api from '../../service/api';

const useForms = () =>{
    //initialize variables
    const [values,setValues]= useState({amount:'', tax:'', type:''});
    const [results,setResults]=useState({show:false,quotation:'',iof:'',total_dolar_notax:'',total_dolar_tax:'',total_reais_notax:'',total_reais_tax:''});
    const [isSubmitted,setIsSubmitted ]=useState(false)
    
    const handleChange = evt =>{
        //opens the object, and set the according value to each variable, according to target.name
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        });

    };
    const handleSubmit = async(evt) =>{
        //prevents page reload
        evt.preventDefault();
        try{
            //makes the api call and calculates the results values we are going to display  
            const response = await api.get();
            const dolar=Number.parseFloat(response.data.USD.ask).toFixed(2);
            const total_dolar_notax = Number.parseFloat(values.amount);
            const total_dolar_tax   =total_dolar_notax + (total_dolar_notax*(Number(values.tax)/100));
            const total_reais_notax =(total_dolar_tax)* Number(dolar);
            const total_reais_tax   =(total_reais_notax * (Number(values.type)/100)) + total_reais_notax ;
            console.log(Number(dolar));
            //set the results values 
            setResults({show: true, 
                        quotation:Number.parseFloat(response.data.USD.ask).toFixed(2),
                        iof:values.type, 
                        total_dolar_notax:total_dolar_notax.toFixed(2), 
                        total_dolar_tax:total_dolar_tax.toFixed(2), 
                        total_reais_notax:total_reais_notax.toFixed(2),
                        total_reais_tax:total_reais_tax.toFixed(2)})
            //set the submitted value to true
            setIsSubmitted(true);
        }catch(err){
            alert("error");
            console.log(err);
            
        }
        
    };
    //this useEffect reset the isSubmitted function  
    useEffect(()=>{
        if(isSubmitted){
            setIsSubmitted(false);
        }
    }, [isSubmitted]);
    
    return{
        handleChange,
        handleSubmit,
        values,
        results,
    };
};   

export default useForms;