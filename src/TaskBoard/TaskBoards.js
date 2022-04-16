import React,{useEffect, useState} from 'react';
import  Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import NewTask from './NewTask';
import EditIcon from '@mui/icons-material/Edit';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import EditTask from './EditTask';


const TaskBoards = () => {
  
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  

  const getItems=()=>{
    let getData = localStorage.getItem('task');
    if(getData){
        return JSON.parse(localStorage.getItem('task'));
    }else{
        return [];
    }
  }
  const [taskName,setTaskName] = useState(getItems());

  useEffect(()=>{
      localStorage.setItem('task',JSON.stringify(taskName))
  },[taskName])

  const addName=(idnametask,nametask,discription,datenametask)=>{
      setTaskName([...taskName,{id:idnametask,name:nametask,discription:discription,date:datenametask}]);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

//   const styleblack = {
//     color:'black',marginRight:1
//   };

//   const stylegreen={
//     color:'white',
//     backgroundColor:'green',
//     marginRight:1,
//     borderRadius:5
//   };
  const deletetask=(id)=>{
    const updateditems = taskName.filter((elem) =>{
        return elem.id !== id;
    });            
    setTaskName(updateditems);
    setOpenEdit(false);
  }
//   const [useCss, setUSeCss] = useState(styleblack);
//   const handler=()=>{
//       if(cssValue){
//         setCssvalue(false);
//         setUSeCss(styleblack);
//       }else{
//         setCssvalue(true);
//         setUSeCss(stylegreen);
//       }
//   }
  return (
    <Container component="main" maxWidth="xs" sx={{marginTop:10}}>
        <Box sx={{
         overflow:'auto',
          position:'fixed',
          minHeight:100,
          width: 400, 
          maxheight: 100,
          marginTop:2,
          marginLeft:-168,
          alignItems:'center',
          border: 1,
          borderColor:'black',
        }}>

            <Typography component="h4" variant="body2" sx={{display:'flex',justifyContent:'space-between',marginLeft:1,marginRight:1,padding:1,fontSize:18}}>
                My Tasks
                <IconButton aria-label="Example" sx={{height:20,marginTop:.6}}>
                    <FontAwesomeIcon icon={faEllipsisV} fontSize="medium"/>
                </IconButton>
            </Typography>
            <Typography component="h3" variant="body2" sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginLeft:1,marginRight:1,padding:1,fontSize:20}}>
                <AddIcon sx={{borderRadius:3,backgroundColor:'blue',color:'white',marginRight:1,cursor:'pointer'}} fontSize='x-large' onClick={handleOpen} />
                Add a task
            </Typography>
            {open && <NewTask handleCloses={handleClose} opens={open} addNames={addName}/>}
            {taskName.map((val,index)=>{
                
                return(
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography omponent="h4" variant="body2" sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginLeft:1,marginRight:1,padding:1,fontSize:20}}>
                            <CircleOutlinedIcon sx={{color:'black',marginRight:1}} f ontSize='medium'  />
                            {val.name}
                        </Typography>
                        <EditIcon sx={{marginRight:1.5}} onClick={handleOpenEdit}/>
                        {openEdit && <EditTask opens={openEdit} obj ={val} idx ={index} handlers={handleCloseEdit} onClick={()=>{deletetask(val.id)}} />}
                    </Box>
                )
            })}
            
        </Box>
    </Container>
   
  )
}

export default TaskBoards;