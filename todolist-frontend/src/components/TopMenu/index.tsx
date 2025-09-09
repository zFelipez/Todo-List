
import styles from './styles.module.css';
import type React from 'react';
import NavIcons from '../NavIcons';



type TopMenuProps= {

    h1: React.ReactNode
}



export default function TopMenu( {h1}: TopMenuProps){

return(

<>

<div className={styles.menuContainer}>


<div className={styles.title}>
    <h1 className= {styles.h1}>{h1}</h1>


    
</div>



<div className= {styles.iconsContainer }>

 


<NavIcons title='Pagina Inicial ' linkTo= {'/'}  iconName= {'home'}></NavIcons>
<NavIcons title='Adicionar tarefa' linkTo= {'addtask'}  iconName= {'add'}></NavIcons>
<NavIcons title='Pagina de Login' linkTo= {'/login'}  iconName= {'login'}></NavIcons>

 


 

</div>


</div>


</>)

}