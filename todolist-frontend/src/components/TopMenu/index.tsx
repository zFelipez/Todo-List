import { Link } from 'react-router-dom';
import styles from './styles.module.css';





export default function TopMenu(){

return(

<>

<div className={styles.menuContainer}>


<div className={styles.title}>
    <h1 className= {styles.h1}> Lista de Tarefas </h1>


    
</div>



<div className= {styles.iconsContainer }>

<Link to= '/'> <span className={`${styles.icon} material-symbols-outlined`}>add
</span> </Link>



 <Link to= '/'>  <span className={`${styles.icon} material-symbols-outlined`}>
delete
</span> </Link>


<Link to= '/login'> <span className={`${styles.icon} material-symbols-outlined`}>
login
</span>  </Link>

</div>


</div>


</>)

}