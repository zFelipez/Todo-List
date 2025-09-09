import TasksList from '../../components/TasksList';
import TopMenu from '../../components/TopMenu';
import Default from '../../templates/Default';



export default function Home(){



    return(
    
    <>
    
    
    <Default>

     <TopMenu h1={'Lista de Tarefas'}/>
     <TasksList></TasksList>
        
    </Default>
    
    </>)
}