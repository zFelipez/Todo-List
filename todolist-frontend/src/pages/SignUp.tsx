import GeneralForm from "../components/GeneralForm";
import NavIcons from "../components/NavIcons";
import Default from "../templates/Default";



export default function SignUp (){


    return(

     <Default> 
        
          <GeneralForm  title = {'Sign In'} firstInput='text' secondInput='password' submitButton='Criar ' placeholdFirst=' Digite seu usuario' 
       
       placeholdSecond='Digite sua senha' logOrSignPage= {true}  sentence= {'Ja tem uma conta ? Entre Aqui'} link={'/login'}
       >
       <NavIcons title="Pagina Inicial" linkTo="/" iconName="home"></NavIcons>

       </GeneralForm>
        
        </Default>
        
    )
}