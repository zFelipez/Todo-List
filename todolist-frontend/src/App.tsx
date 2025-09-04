
import { Route, Routes } from "react-router-dom";
import './App.css'
 
import LogIn from "./pages/LogIN";
import SignUp from "./pages/SignUp";

function App() {
   

  return (
    <>
 


      <Routes>
      <Route path="/login" element={ <LogIn></LogIn>} />
      <Route path="/signup" element={ <SignUp></SignUp >} />
       
    </Routes>

     

    
        
    </>
  )
}

export default App
