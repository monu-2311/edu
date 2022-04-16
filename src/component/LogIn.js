import TextField  from '@mui/material/TextField';
import FormControlLabel  from '@mui/material/FormControlLabel';
import  Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import CheckBox  from '@mui/material/Checkbox';
import Link  from '@mui/material/Link';
import Button  from '@mui/material/Button';



const LogIn = (props) => {
  const [user,setUsers] = useState([])  //Create user and set into the local storage
  const[login,setLogin] = useState(true); //Create to check if user already have account or not
  const[invalidEmail,setInvalidEmail] = useState(false);  // Create to show the error when the email is not vaild
  const[invalidPassword,setInvalidPassword] = useState(false); // Create to show the error when the password length is less than 8 is not vaild
  
  const onSignUpSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if(data.get('email').includes('@') && data.get('password').trim().length > 8) {

      /* store the new user details into the localstorage */
      let userList = user;
      userList.push({Email:data.get('email'),Password:data.get('password')})
      localStorage.setItem('isLoggedIn',JSON.stringify(userList));
      /*End of Logic */

      setUsers(userList); /* add the new user and previous user details into the localstorage */
      setLogin(false);
      setInvalidEmail(false);
      setInvalidPassword(false); 
    }else if(!data.get('email').includes('@')){
      setInvalidEmail(true);
    }else {
      setInvalidPassword(true);
    }
  }

  const onLogInSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const Email = data.get('email');
    const Password = data.get('password');
    var log = JSON.parse(localStorage.getItem('isLoggedIn'));
    console.log(log);
    console.log(Email,Password);
    if(Email === log[0].Email && Password === log[0].Password){
      localStorage.setItem('islogIn','1');
      props.loginset();
    }else{
      alert('Something went wrong Please try again!')
    }
  }
 

  const SignUp=()=>{
    return(
      <>
        <Typography component="h1" variant="h5">
                Sign Up
        </Typography>
      <Box component="form" onSubmit={onSignUpSubmit} noValidate sx={{mt:4}}>
              <TextField 
                  margin="normal" 
                  id="userName" 
                  label="Username" 
                  name="userName" 
                  autoComplete="userName" 
                  placeholder='Enter Name' 
                  fullWidth  
                  autoFocuss 
                  required
                  />
              <TextField 
                  margin="normal"
                  id="email" 
                  label="Email Address" 
                  error={invalidEmail} 
                  name="email" 
                  autoComplete="email" 
                  placeholder='Enter Email'
                  fullWidth  
                  autoFocuss 
                  required
                  />
              <TextField 
                  type="password"
                  margin="normal" 
                  id="password" 
                  label="Password" 
                  error={invalidPassword} 
                  name="password" 
                  autoComplete="password" 
                  placeholder='Enter Password' 
                  fullWidth  
                  autoFocuss 
                  required 
              />           
              <Box sx={{
                  display:'flex',
                  justifyContent:'space-between'
              }}>
                  <FormControlLabel control = {<CheckBox value="remember" color="primary"/>} label="Remember me" fullWidth />
                  <Link href="#" variant="body2" sx={{marginTop:1.25}}>Forgot Password</Link>
              </Box>
              <Button type="submit" variant="contained" fullWidth sx={{mt:4}}>Sign Up</Button>
              <Link underline='false' variant="body2" sx={{marginTop:1.25}}><p>Already have an account?<Button onClick={()=>{setLogin(false)}} sx={{ml:-.5}}>Log In</Button></p></Link>
        </Box>
      </>
    )
  }

  const SignIn =()=>{
    return(
      <>
        <Typography component="h1" variant="h5">
              Log In!
        </Typography> 
        <Box component="form" onSubmit={onLogInSubmit} noValidate sx={{mt:4}}>
              <TextField 
                  margin="normal"
                  id="email" 
                  label="Email Address"
                  name="email" 
                  autoComplete="email" 
                  placeholder='Enter Email'
                  fullWidth  
                  autoFocuss 
                  required
                  />
              <TextField 
                  type="password"
                  margin="normal" 
                  id="password" 
                  label="Password" 
                  name="password" 
                  autoComplete="password" 
                  placeholder='Enter Password' 
                  fullWidth  
                  autoFocuss 
                  required 
              />           
              <Box sx={{
                  display:'flex',
                  justifyContent:'space-between'
              }}>
                  <FormControlLabel control = {<CheckBox value="remember" color="primary"/>} label="Remember me" fullWidth />
                  <Link href="#" variant="body2" sx={{marginTop:1.25}}>Forgot Password</Link>
              </Box>
              <Button type="submit" variant="contained" fullWidth sx={{mt:4}}>Log IN</Button>
              <Link underline='false' variant="body2" sx={{marginTop:1.25}}><p>Don't have an account?<Button onClick={()=>{setLogin(true)}} sx={{ml:-.5}}>Sign Up</Button></p></Link>
        </Box>
      </>
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
          marginTop:10,
          display:'flex',
          flexDirection:'column',   
          alignItems:'center'
      }}>
        {login && <SignUp/>}
        {!login && <SignIn/>}
       </Box>
    </Container>
  )
}

export default LogIn