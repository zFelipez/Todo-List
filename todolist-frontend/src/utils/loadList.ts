import type { Task } from "../context/TodoList";


export function loadList(setTasksList : React.Dispatch<React.SetStateAction<Task[]>>) {

    
    fetch("http://localhost:5000/api/allTasks").then(res => res.json()).then( data => setTasksList(data['tasks'])) 
}