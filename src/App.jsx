import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Check from './Pages/Check/Check';
import Reset from './Pages/Reset/Reset';
import Password from './Pages/Password/Password';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Login/>}/>
        <Route path='check' element= {<Check/>}/>
        <Route path='password' element= {<Password/>}/>
        <Route path='reset' element= {<Reset/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
