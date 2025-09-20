import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { messageTimeout } from '../../utils/messageTimeout';


type GeneralFormProps= {
    title?: React.ReactNode, 
    firstInput: React.HTMLInputTypeAttribute,
    secondInput: React.HTMLInputTypeAttribute,
    submitButton: string ,
    placeholdFirst : string, 
    placeholdSecond: string,
    logOrSignPage:boolean, 
    sentence?: string, 
    link?: string,
    children?: React.ReactNode,
    btnFunction? : (title:string, task: string )=> void | Promise<void>,
    actualPageForm: 'signUp' | 'logIn' | 'addTask'
} 

export default function GeneralForm ( {title, firstInput, secondInput,submitButton,placeholdFirst,
  placeholdSecond, logOrSignPage, sentence, link,children,btnFunction , actualPageForm} : GeneralFormProps){


     const [firstText, setFirstText]= useState(''); 
     const [secondText, setSecondText]= useState(''); 
     const [message, setMessage] = useState<string| null>(null);
     const [isError, setIsError] = useState(false);

       

    return  (

      <>
      
     
      <div className={styles.container}> 
      
      
       <form action="" className={styles.form}>
          {children && <div className={styles.children}>{children}</div>  }
         <div className={styles.formContainer}>
 <h1 className={styles.h1}> {title} </h1>
      
      
      
        <input className = {styles.firstInput} value= {firstText}
        
        onChange= {(e)=>{

       setFirstText(e.target.value);

        }}type={firstInput}  placeholder= { placeholdFirst } />


        <input  className= {styles.secondInput } value={secondText}
         
         onChange={(e)=>{

          setSecondText(e.target.value)
         
         }}type={secondInput}  placeholder= {placeholdSecond} />


       <button className = {styles.btn }
      
      onClick= {async (e)=> {
        e.preventDefault() 

      if(actualPageForm ==='logIn'){

         return 
      }     

      if (actualPageForm ==='signUp'){


        return
      } 

      if( actualPageForm === 'addTask'){
        if( firstText === '' || secondText === ''){
            setMessage('Os dois campos sao obrigatorios')
            setIsError(true)
            messageTimeout(setMessage)
          return 
        }
       
       try{

         setMessage(' Tarefa adicionada com sucesso');
         setIsError(false)

         await btnFunction?.(firstText, secondText);
         messageTimeout(setMessage)
       }catch(err){

        setMessage('Erro ao tentar adicionar tarefa.');
        setIsError(true)
        messageTimeout(setMessage)
       }
       
        
      }
  
       }}>  {submitButton} </button>

       <div className={styles.message}>
       { message && (

        <div className= {   isError? styles.isErrorMessage : styles.isSucceededMessage }> 
         {message}
        </div>  

       )}</div>
       
       <p>     { logOrSignPage && link && (<Link to={link}> {sentence}</Link>) }</p>

       </div>
 
      

       </form>
      
      </div>
      </>


    )
}