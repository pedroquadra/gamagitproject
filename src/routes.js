import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Repositories from "./Repositories";
import Home from './Home';

export default function Rota(){
    return(        
        <BrowserRouter>
          <Routes>
        <Route path='/' element={<Home/>}/>
        <Routes path='/Repositories' element={<Repositories/>}/>
        </Routes> 
        </BrowserRouter> 
       );
  
}
