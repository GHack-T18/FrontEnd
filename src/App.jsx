/* eslint-disable no-unused-vars */

import './index.css'; 
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'; 
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Email from './pages/Email';



export const Appcontext2=createContext();
export const Appcontext3=createContext();
function App() {
  const [isConnected , setIsConnected]=useState(true);
  const [Article , setArticle]=useState(null);
  return (

    <div className=' w-[100%] h-[100vh] '>     
    <Appcontext2.Provider value={{isConnected , setIsConnected}}>
    <Appcontext3.Provider value={{Article , setArticle}}>

     <Router>
     <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/LogIn' element={<LogIn/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Chat' element={<Chat/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Email' element={<Email/>}/>




       </Routes>    
    </Router>
   </Appcontext3.Provider> 
    
</Appcontext2.Provider>  

  </div>
  
  )
 
}

export default App;
