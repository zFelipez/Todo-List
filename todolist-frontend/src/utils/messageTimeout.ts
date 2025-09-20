

export const messageTimeout = ( func :React.Dispatch<React.SetStateAction<string | null>>)=>{
 setTimeout(()=>{

    func(null)
 }, 2000)
   

}