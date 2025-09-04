import GeneralForm from "../components";


export default function LogIn (){


    return(


          <GeneralForm  title = {'Log In'} firstInput='text' secondInput='password' submitButton=' Entrar ' placeholdFirst=' Digite seu usuario' 
       
       placeholdSecond='Digite sua senha' logOrSignPage= {true}  sentence= {'Não tem uma conta ainda? Crie uma Aqui'} link={'/signup'}
       ></GeneralForm>
    )
}