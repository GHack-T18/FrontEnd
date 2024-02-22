/* eslint-disable no-unused-vars */

import './index.css'; 
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'; 
import Dashboard from './pages/Dashboard';


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
    <Route path='/' element={<Dashboard/>}/>

       </Routes>    
    </Router>
   </Appcontext3.Provider> 
    
</Appcontext2.Provider>  

  </div>
  
  )
 
}

export default App;
