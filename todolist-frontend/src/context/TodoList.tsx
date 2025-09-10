
import { createContext, useContext, useState, type ReactNode } from 'react';

export type Task = {

   id: number;
   title: string;
   task: string;  

}


type TodoListContextType= {
    userStatus :{
      loggedIn: boolean ,                    //tipagem do contexto 
      setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    } ,
    tasks:{
        tasksList: Task[]   , 
        setTasksList :  React.Dispatch<React.SetStateAction<Task[]>>;
    },
}


const TodoListContext = createContext<TodoListContextType  | undefined>(undefined); //contexto

export function TodoListProvider( {children}: {children: ReactNode}) {
 
   const [loggedIn, setLoggedIn] = useState (false);
   const [tasksList,setTasksList] = useState<Task[]>([]);

   const value : TodoListContextType = {
    userStatus: {
        loggedIn:loggedIn,
        setLoggedIn: setLoggedIn
    },
    tasks:{
        
        tasksList: tasksList,
        setTasksList:setTasksList
    },

   }
    return(

     <TodoListContext.Provider value ={value}> 

       {children}

     </TodoListContext.Provider>

    )
}

export function useTodoListContext(){

    const context = useContext( TodoListContext);

    if ( !context){
        throw new Error('É nescessario utilizar isto dentro de um provider');
    }

    return context; 


}
