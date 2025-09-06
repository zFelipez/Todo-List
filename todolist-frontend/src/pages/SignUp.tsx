import GeneralForm from "../components/GeneralForm";



export default function SignUp (){


    return(


          <GeneralForm  title = {'Sign In'} firstInput='text' secondInput='password' submitButton='Criar ' placeholdFirst=' Digite seu usuario' 
       
       placeholdSecond='Digite sua senha' logOrSignPage= {true}  sentence= {'Ja tem uma conta ? Entre Aqui'} link={'/login'}
       ></GeneralForm>
    )
}