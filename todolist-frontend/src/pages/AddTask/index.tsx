import GeneralForm from '../../components/GeneralForm';
import TopMenu from '../../components/TopMenu';
import Default from '../../templates/Default';



export default function AddTask(){



    return (


   <>
    <Default>

     <TopMenu h1= {'Adicionar Tarefa '}/>
     <GeneralForm  firstInput='text' secondInput='text' submitButton='Adicionar Tarefa ' placeholdFirst=' Digite titulo da Tarefa ' 
       
       placeholdSecond='Digite sua tarefa' logOrSignPage= {false}  link={'/'}>
       


     </GeneralForm>
        
    </Default>

   </>


    )
}