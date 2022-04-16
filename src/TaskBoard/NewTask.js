import React, { useState } from 'react';
import  Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import validator from 'validator';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewTask = (props) => {
    const[invalidName,setInvalidName] = useState(false);
    const[invalidDate,setInvalidDate] = useState(false);
    const[invalidDis,setInvalidDis] = useState(false);
   
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',   
        boxShadow: 24,
        p: 4,     
    };

      const onSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(data.get('username'));
        const date = data.get('date');
        const discription = data.get('discription');
        const name = data.get('username');
        const isValidDate = validator.isDate(date);
        const isValidName = name.trim().length > 0;
        const isValidDiscription = discription.trim().length > 0;
        if(isValidDate && isValidName && isValidDiscription){
            props.addNames(Math.floor(Math.random()* 100),name,discription,date);
            props.handleCloses();
        }else{
            (!isValidName) ? setInvalidName(true): setInvalidName(false);
            (!isValidDiscription) ? setInvalidDis(true): setInvalidDis(false);
            (!isValidDate) ? setInvalidDate(true): setInvalidDate(false);
        }
      }
  return (
    <Modal
        open={props.opens}
        onClose={props.handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >   
        <Box sx={style} component="form" onSubmit={onSubmit} noValidate> 
        <Typography component="h4"  variant="contained" sx={{display:'flex',alignItems:'center'}}>
            Add Task
        </Typography>
          <TextField margin="normal" error={invalidName}id="username" label="New List" name="username" autoComplete="username" placeholder='New List' fullWidth  autoFocuss required/>
          <TextField multiline row={5}error={invalidDis} margin="normal" id="discription" label="Discription" name="discription" placeholder='Enter Discription' autoComplete="discription" fullWidth autoFocuss required/>
          <TextField margin="normal" error={invalidDate} type="date" id="date"  name="date" autoComplete="discription" fullWidth autoFocuss required/>
          <Button type="submit"  variant="contained" fullWidth >Add</Button> 
        </Box>
    </Modal>
  )
}

export default NewTask;