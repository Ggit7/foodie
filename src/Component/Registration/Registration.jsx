import React,{useEffect,useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { register } from '../../Redux/AuthSlice';
import {useDispatch,useSelector}from 'react-redux'
import {useNavigate,NavLink} from'react-router-dom'
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import './Registration.css';

const Registration = () => {
  const {redirectContact}=useSelector((state=>state.contents));
  const [file,setFile]=useState('');
  const handleupload=(e)=>{
    setFile(e.target.files[0]);
  }
  const [user,setUser]=useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
  });
  const [error,setError]=useState({});
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const validation=()=>{
    let error={};
    const first_nameptrn=/[A-Za-z]{3}/;
    const last_nameptrn=/[A-Za-z]{3}/;
    const emailptrn=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordptrn=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!user.first_name){
      error.first_name='enter first_name';
    }else if(!first_nameptrn.test(user.first_name)){
      error.first_name='wrong input'
    }
    if(!user.last_name){
      error.last_name='enter last_name';
    }else if(!last_nameptrn.test(user.last_name)){
      error.first_name='wrong input'
    }
    if(!user.email){
      error.email='enter email';
    }else if(!emailptrn.test(user.email)){
      error.email='wrong input'
    }
    if(!user.password){
      error.password='enter password';
    }else if(!passwordptrn.test(user.password)){
      error.password='wrong input'
    }
    return error
    }
    let name, value;
    const postUserData=(e)=>{
      name=e.target.name;
      value=e.target.value;
      if(name==="first_name"){
          if(value.trim().length===0){
              setUser({...user,first_name:""});
              setError({...error,first_name:"enter name"});
          }else{
              setUser({...user,first_name:value});
              setError({...error,first_name:""});
          }
      }
      if(name==="last_name"){
        if(value.trim().length===0){
            setUser({...user,last_name:""});
            setError({...error,last_name:"enter name"});
        }else{
            setUser({...user,last_name:value});
            setError({...error,last_name:""});
        }
    }
      if(name==="email"){
          if(value.trim().length===0){
              setUser({...user,email:""});
              setError({...error,email:"email cannot be empty"});
          }else{
              setUser({...user,email:value});
              setError({...error,email:""});
          }
      }
      if(name==="password"){
          if(value.trim().length===0){
              setUser({...user,password:""});
              setError({...error,password:"password cannont be empty"});
          }else{
              setUser({...user,password: value});
              setError({...error,password:""});
          }
      }
   
    };
    const submit=(e)=>{
      e.preventDefault();
      setError(validation());
      let fromData=new FormData();
      fromData.append('first_name',user.first_name);
      fromData.append('last_name',user.last_name);
      fromData.append('profile_pic',file);
      fromData.append('email',user.email);
      fromData.append('password',user.password);
      if(user.email!==''&& user.password!==''){
      dispatch(register(fromData))
      navigate('/login')
    }};
    const RedirectUser=()=>{
      let name=localStorage.getItem("first_name");
      let isInRegistared=window.location.pathname.toLowerCase()==='/registration';
      if (name!==null&& name!==undefined&& name!==""){
          isInRegistared && navigate('/login');
      }
  };
  useEffect(()=>{
    RedirectUser();
  },[redirectContact]);
  return (
    <div className='reg'>
      <form>
        <Box className="boxR">
          <Typography variant="h4" padding={3} textAlign={'center'}>
            Registration
          </Typography>
          <TextField
        margin="normal"
        type="text"
        variant="outlined"
        placeholder="First Name"
        name="first_name"
        value={user.first_name}
        onChange={(e)=>postUserData(e)}
      />
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        placeholder="Last Name"
        name="last_name"
        onChange={(e)=>postUserData(e)}
      />
      <TextField
        margin="normal"
        type="email"
        variant="outlined"
        placeholder="Email"
        name="email"
        onChange={(e)=>postUserData(e)}
      />
      <TextField
        margin="normal"
        type="password"
        variant="outlined"
        placeholder="Password"
        name="password"
        onChange={(e)=>postUserData(e)}
      />
          <TextField
            type="file"
            variant="outlined"
            placeholder="Upload Image"
            accept="image/*"
            margin="normal"
            onChange={handleupload}
          />
          <Button onClick={submit} variant="contained" color="success" sx={{ mt: 3, borderRadius: 3 }}>
            Register
          </Button>
          <Box display={'flex'} flexDirection={'row'} mt={2}>
            <NavLink to={'/login'}>
              <Button startIcon={<ForwardSharpIcon/>} >LogIn</Button>
            </NavLink>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Registration;
