
import {  useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LogIn from './component/LogIn';
import MainHeader from './MainHeader/MainHeader';
function App() {
  const[isLogIn,setIsLogIn] = useState(false)
  const Handler=()=>{
    setIsLogIn(true)
  }
  const HandleroOut=()=>{
    setIsLogIn(true);
  }
  useEffect(()=>{
    const details = localStorage.getItem('islogIn');
    if(details === '1'){
      setIsLogIn(true);
    }else{
      setIsLogIn(false);
    }
    
  },[])

   return (
    <BrowserRouter>
     <main>
       {!isLogIn && <LogIn loginset={Handler}/>}
       {isLogIn && <MainHeader loginset={Handler} logout={HandleroOut}/>}
     </main>
    </BrowserRouter>
  );
}

export default App;
