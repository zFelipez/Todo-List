import NavIcons from '../NavIcons'
import styles from './styles.module.css'




export default function TasksList(){

      let loggedIn= false; 

      let listexmple = [  {id:1 , titulo: 'tarefa 1' , tarefa : 'fazer'},
        {id:2 , titulo: 'tarefa 2' , tarefa : 'fazer'},
        {id:3 , titulo: 'tarefa 3' , tarefa : 'fazer'},   {id:4 , titulo: 'tarefa 3' , tarefa : 'fazer'},{id:4 , titulo: 'tarefa 3' , tarefa : 'fazer'}
       ]
    return(
         
        <>
        
        <div className={styles.container}>

        {

         loggedIn ?  listexmple.map((task)=>{
            return <div key={task.id} className={styles.taskContainer}>
              
            

             <div className={styles.textContainer}>

              <h2 className={styles.h2}> {task.titulo}</h2>
               <p className={styles.p}>  {task.tarefa}</p>

              </div>


             <div  className= {styles.clickablesContainer}>

                <NavIcons title='Apagar a tarefa ' linkTo='/' iconName='delete'/>  
                <input type="checkbox"  className={styles.checkbox}/>

              </div>
         
       
            </div>
          })  : <div className= {styles.message}> Faça o login na sua conta , ou crie uma , para ver suas tarefas</div>

        }

        </div>
        
        </>
    )
}