import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { logIn ,reset_redirectContact} from '../../Redux/AuthSlice';
import { Box, Button, TextField, Typography } from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const{redirectContact}=useSelector((state)=>state.contents)
  const[myname,setMyname]=useState('')
  const myName=localStorage.getItem('first_name')
useEffect(()=>{
  setMyname(myname);
},[myName])
const [user, setUser] = useState(
  { email: "",
   password: "" });
const [error, setError] = useState({});

const dispatch = useDispatch();
const navigate = useNavigate();
const validation = () => {
  let error = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!user.email) {
    error.email = "Email address is required";
  } else if (!emailPattern.test(user.email)) {
    error.email = "Invalid email address";
  }

  if (!user.password) {
    error.password = "Password is required";
  } else if (!passwordPattern.test(user.password)){
    error.password = "invalid password";
  }

  return error;
};
let name, value;

const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "email") {
        if (value.trim().length === 0) {
            setUser({ ...user, email: "" });
            setError({ ...error, email: "email cannot be empty" });
        } else {
            setUser({ ...user, email: value });
            setError({ ...error, email: "" });
        }
    }
    if (name === "password") {
        if (value.trim().length === 0) {
            setUser({ ...user, password: "" });
            setError({ ...error, password: "password cannont be empty" });
        } else {
            setUser({ ...user, password: value });
            setError({ ...error, password: "" });
        }
    }
};
const submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data = {
        email: user.email,
        password: user.password,
    }
      dispatch(logIn(data)).then(() => {
        RedirectUser();
      })
};

const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase()=== "/login"
    if (token !== null && token !== undefined && token !== "") {
        isInLoginPage && navigate("/")
    }
};
useEffect(()=>{
    reset_redirectContact(null)

},[redirectContact])
  return (
    <div className='login'>
      <form>
        <Box className='boxL'>
          <Typography variant='h4' padding={3} textAlign={'center'}>
            Login
          </Typography>
          <TextField
            margin='normal'
            type='email'
            variant='outlined'
            placeholder='Email'
            name='email'
            value={user?.email}
            onChange={(e)=>postUserData(e)}
            helperText={error.email}
            
          />
          <TextField
            margin='normal'
            type='password'
            variant='outlined'
            placeholder='Password'
            name='password'
            value={user?.password}
            onChange={(e)=>postUserData(e)}
            helperText={error.password}
          />
          
          <Button onClick={submit} variant='contained' color='success' sx={{ mt: 3, borderRadius: 3 }}>
            Login
          </Button>
          <Box display={'flex'} flexDirection={'row'} mt={2}>
            <NavLink to={'/registration'}>
              <Button>Registration</Button>
            </NavLink>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Login;
