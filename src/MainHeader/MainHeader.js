import React, { useState,useEffect } from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Avatar from '@mui/material/Avatar';


const MainHeader = (props) => {
    const[img,setImg] = useState();
    const imgURL = "https://picsum.photos/id/77/info";

    const fetchImage = async()=>{
        const respons = await fetch(imgURL);
        const imgBlod = await respons.blob();
        const imgUrl = URL.createObjectURL(imgBlod);
        setImg(imgUrl);
    }
    useEffect(()=>{
        fetchImage();
        props.loginset();
    },[])

  return (
    <header className={classes['main-header']}>
        <h1>TaskBoard</h1>
        <div className={classes['sub-header']}>
        <Navigation/>
        <Avatar alt="Remy Sharp" src={img} sx={{ width: 56, height: 56,marginLeft:-16 }}/> 
        </div>
    </header>  
  )
}

export default MainHeader;