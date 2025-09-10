
import NavIcons from '../NavIcons'
import styles from './styles.module.css'
import { useTodoListContext } from '../../context/TodoList';
import { type Task} from '../../context/TodoList';





export default function TasksList(){

      const {loggedIn,setLoggedIn} = useTodoListContext().userStatus
      const {tasksList,setTasksList} = useTodoListContext().tasks

      
    return(
         
        <>
        
        <div className={styles.container}>

        {

         loggedIn ?  tasksList.map((task: Task)=>{
            return <div key={task.id} className={styles.taskContainer}>
              
            

             <div className={styles.textContainer}>

              <h2 className={styles.h2}> {task.title}</h2>
               <p className={styles.p}>  {task.task}</p>

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