import styles from './styles.module.css';

type DefaultProps = {

    children: React.ReactNode 
}

export default function Defaullt({children}: DefaultProps){


    return ( 


        <>
        <div className= {styles.generalContainer}>
        <div className={styles.containerDefault}>

         {children}


        </div>
        </div>
        
        
        </>
    )
}