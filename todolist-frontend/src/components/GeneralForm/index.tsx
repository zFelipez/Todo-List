import styles from './styles.module.css';
import { Link } from "react-router-dom";


type GeneralFormProps= {
    title: React.ReactNode, 
    firstInput: React.HTMLInputTypeAttribute,
    secondInput: React.HTMLInputTypeAttribute,
    submitButton: string ,
    placeholdFirst : string, 
    placeholdSecond: string,
    logOrSignPage:boolean, 
    sentence?: string, 
    link?: string,
    children?: React.ReactNode
} 

export default function GeneralForm ( {title, firstInput, secondInput,submitButton,placeholdFirst,placeholdSecond, logOrSignPage, sentence, link,children } : GeneralFormProps){




    return  (

      <>
      
     
      <div className={styles.container}> 
      
      
       <form action="" className={styles.form}>
          {children && <div className={styles.children}>{children}</div>  }
         <div className={styles.formContainer}>
 <h1 className={styles.h1}> {title} </h1>
        <input className = {styles.firstInput} type={firstInput}  placeholder= { placeholdFirst } />
        <input  className= {styles.secondInput }type={secondInput}  placeholder= {placeholdSecond} />


       <button className = {styles.btn }> {submitButton} </button>
       
       <p>     { logOrSignPage && link && (<Link to={link}> {sentence}</Link>)}</p>

       </div>
 
      

       </form>
      
      </div>
      </>


    )
}