import GeneralForm from "../components/GeneralForm";
import NavIcons from "../components/NavIcons";


export default function LogIn (){


    return(


          <GeneralForm  title = {'Log In'} firstInput='text' secondInput='password' submitButton=' Entrar ' placeholdFirst=' Digite seu usuario' 
       
       placeholdSecond='Digite sua senha' logOrSignPage= {true}  sentence= {'Não tem uma conta ainda? Crie uma Aqui'} link={'/signup'}
       >

       <NavIcons linkTo="/" iconName="home"></NavIcons>

       </GeneralForm>
    )
}