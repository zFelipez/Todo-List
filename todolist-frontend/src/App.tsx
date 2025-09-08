
import { Route, Routes } from "react-router-dom";
import './App.css'; 
 
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
   

  return (
    <>
 


      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/addtask' element= {<AddTask></AddTask>}></Route>
        <Route path='/edittask' element= {<EditTask></EditTask >}></Route>
        <Route path="/login" element={ <LogIn></LogIn>} />
        <Route path="/signup" element={ <SignUp></SignUp >} />
       
    </Routes>

     

    
        
    </>
  )
}

export default App
