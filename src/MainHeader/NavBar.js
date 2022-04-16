import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const NavBar = () => {
  return (

      <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        style={({isActive})=>{ return {backgroundColor: isActive ? '#13beff':''}}}
                    >
                        TaskBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/weather"
                        style={({isActive})=>{ return {backgroundColor: isActive ? '#13beff':''}}}
                    >
                        Weather
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/calender"
                        style={({isActive})=>{ return {backgroundColor: isActive ? '#13beff':''}}}
                    >
                        Calender
                    </NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default NavBar;