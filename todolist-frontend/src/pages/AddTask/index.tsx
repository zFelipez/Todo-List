import GeneralForm from '../../components/GeneralForm';
import TopMenu from '../../components/TopMenu';
import { useTodoListContext } from '../../context/TodoList';
import Default from '../../templates/Default';
import { loadList } from '../../utils/loadList';



export default function AddTask(){
   
  const {setTasksList}= useTodoListContext().tasks; 

  async function addTask (){

   const tasks= { title: 'titulo 2', task: 'tarefa 2', completed:true};
  try{
    console.log('cheguei aqui')
    const res= await fetch("http://localhost:5000/api/addTask",{
    method:'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(tasks),}
   )
   const data = await res.json();

   console.log('Task inserida com sucesso',data);
   loadList(setTasksList);

  }catch(err){

    console.log('erro ao tentar adicionar tarefa ', err);
   

  }
  

   } 
   
   

    return (


   <>
    <Default>

     <TopMenu h1= {'Adicionar Tarefa '}/>
     <GeneralForm  firstInput='text' secondInput='text' submitButton='Adicionar Tarefa ' placeholdFirst=' Digite titulo da Tarefa ' 
       
       placeholdSecond='Digite sua tarefa' logOrSignPage= {false}  link={'/'} btnFunction={addTask}>
       


     </GeneralForm>
        
    </Default>

   </>


    )
}