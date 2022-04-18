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
import validator from 'validator';


const TaskBoards = () => {

 //Css 
 const typography={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    marginLeft:1,
    marginRight:1,
    padding:1,
    fontSize:20
 }

 const AddIcon={
     borderRadius:3,
     backgroundColor:'blue',
     color:'white',
     marginRight:1,
     cursor:'pointer'
 }

 const typographyh4={
     display:'flex',
     justifyContent:'space-between',
     marginLeft:1,
     marginRight:1,
     padding:1,
     fontSize:18
  }
//End Task
  
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  
  //fetch data from the localstorage 
  const getItems=()=>{
    let getData = localStorage.getItem('task');
    if(getData){
        return JSON.parse(localStorage.getItem('task'));
    }else{
        return [];
    }
  }

  const [taskName,setTaskName] = useState(getItems());

  //when ever the taskName Is Change the perform task 
  useEffect(()=>{
      localStorage.setItem('task',JSON.stringify(taskName))  //set taskName into the Local storage
  },[taskName])

  
  const addName=(idnametask,nametask,discription,datenametask)=>{
    setTaskName([...taskName,{id:idnametask,name:nametask,discription:discription,date:datenametask}]);
  };

  //fucntion for Openint and closing the NewTask.js 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   //fucntion for Openint and closing the EditTask.js
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  //Delete the task
  const deletetask=(id)=>{
    const updateditems = taskName.filter((elem) =>{
        return elem.id !== id;
    });            
    setTaskName(updateditems);
    setOpenEdit(false);
  }

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
            <Typography component="h4" variant="body2" sx={typographyh4}>
               My Tasks
              <IconButton aria-label="Example" sx={{height:20,marginTop:.6}}>
                 <FontAwesomeIcon icon={faEllipsisV} fontSize="medium"/>
              </IconButton>
            </Typography>
            <Typography component="h3" variant="body2" sx={typography}>
               <AddIcon sx={AddIcon} fontSize='x-large' onClick={handleOpen} />
                Add a task
            </Typography>

            /*Open the Newtask.js Module*/
            {open && <NewTask handleCloses={handleClose} opens={open} addNames={addName}/>}

            /*Render The add task list */
            {taskName.map((val,index)=>{
                return(
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography omponent="h4" variant="body2" sx={typography}>
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