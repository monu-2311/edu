import React from 'react';
import  Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const EditTask = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',   
        boxShadow: 24,
        p: 4,
        
      };

      //call the delete function in Taskboard
      const deletetask=()=>{
          props.onClick();
      }

  return (
    <Modal
        open={props.opens}
        onClose={props.handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} component="form"  noValidate> 
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
           <DeleteOutlineOutlinedIcon sx={{color:'info.main'}} onClick={deletetask}/>
           <CloseOutlinedIcon onClick={()=> props.handlers()}/>
          </Box>
          <Box sx={{marginTop:3}}>
              
          <TextField 
            margin="normal" 
            value={props.obj.name} 
            id="username" 
            label="New List" 
            type="text" 
            name="username" 
            autoComplete="username" 
            placeholder='New List' 
            fullWidth  
            autoFocuss 
            required
          />

          <TextField 
            multiline 
            row={5} 
            value={props.obj.discription} 
            margin="normal" 
            id="discription" 
            type="text" 
            label="Discription" 
            name="discription" 
            placeholder='Enter Discription' 
            autoComplete="discription" 
            fullWidth 
            autoFocuss 
            required
          />

          <TextField 
            margin="normal" 
            value={props.obj.date} 
            type="date" 
            id="date"  
            name="date" 
            autoComplete="discription" 
            fullWidth 
            autoFocuss 
            required
          />
          </Box>
        </Box>
      </Modal>
  )
}

export default EditTask