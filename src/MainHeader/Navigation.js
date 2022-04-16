import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calender from '../Calender/Calender';
import TaskBoards from '../TaskBoard/TaskBoards';
import Weather from '../Weather/Weather';
import NavBar from './NavBar';


const Navigation = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<TaskBoards/>}/>
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/calender" element={<Calender/>}/>
        </Routes>
        
    </>
  )
}

export default Navigation;