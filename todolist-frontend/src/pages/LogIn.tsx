import GeneralForm from "../components/GeneralForm";
import NavIcons from "../components/NavIcons";
import Default from "../templates/Default";



export default function LogIn (){


    return(

        <Default>

        <GeneralForm  title = {'Log In'} firstInput='text' secondInput='password' submitButton=' Entrar ' placeholdFirst=' Digite seu usuario' 
       
       placeholdSecond='Digite sua senha' logOrSignPage= {true}  sentence= {'Não tem uma conta ainda? Crie uma Aqui'} link={'/signup'}
       >

       <NavIcons title="Pagina Inicial" linkTo="/" iconName="home"></NavIcons>

       </GeneralForm>


        </Default>
         
    )
}