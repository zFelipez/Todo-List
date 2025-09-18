import { useEffect } from 'react';
import TasksList from '../../components/TasksList';
import TopMenu from '../../components/TopMenu';
import Default from '../../templates/Default';
import { useTodoListContext } from '../../context/TodoList';
import { loadList } from '../../utils/loadList';




export default function Home(){


   //const {tasksList, setTasksList }= useTodoListContext().tasks 
    
    const {setTasksList} = useTodoListContext().tasks;  
    useEffect( ()=>{ loadList(setTasksList)},[] )

    return(
    
    <>
    
    
    <Default>

     <TopMenu h1={'Lista de Tarefas'}/>
     <TasksList></TasksList>
        
    </Default>
    
    </>)
}