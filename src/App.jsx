import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Check from './Pages/Check/Check';
import Reset from './Pages/Reset/Reset';
import Password from './Pages/Password/Password';
import Personal from './Pages/Setting/Personal';
import Business from './Pages/Setting/Business';
import Security from './Pages/Setting/Security';
import Delete from './Pages/Setting/Delete';


const App = () =>  {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (

    <BrowserRouter>
      <Routes>
      <Route index element={<Login/>}/>
        <Route path='check' element= {<Check/>}/>
        <Route path='password' element= {<Password/>}/>
        <Route path='reset' element= {<Reset/>}/>
        <Route path='personal' element= {<Personal/>}/>
        <Route path='business' element= {<Business/>}/>
        <Route path='security' element= {<Security/>}/>
        <Route path='delete' element= {<Delete/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
