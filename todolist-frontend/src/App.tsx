
import { Route, Routes } from "react-router-dom";
import './App.css'; 
 
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
   

  return (
    <>
 


      <Routes>
        <Route path="/" element={<Home></Home>} />
      <Route path="/login" element={ <LogIn></LogIn>} />
      <Route path="/signup" element={ <SignUp></SignUp >} />
       
    </Routes>

     

    
        
    </>
  )
}

export default App
