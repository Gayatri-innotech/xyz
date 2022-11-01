import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../redux/authSlice';
import {useNavigate} from 'react-router-dom'
import './style.css'

 const Login = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  const dispatch = useDispatch();
  const authState = useSelector(state=>state.authSlice)
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(username, pass)
    dispatch(signInUser({username, pass}))
  }
  console.log(authState);

  useEffect (() => {
    if(authState?.token){
      navigate('/poll')
    }
  },[authState])

   return (
     <div className='box'>
        <h2 className='title'>Login</h2>
        {/* {authState.error}<br/> */}
        <label htmlFor='' className='boxe'>Username</label><br/>
        <input type='text' className='boxes' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/><br/>
        <label htmlFor='' className='boxe'>Password</label><br/>
        <input type='password' className='boxes' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/><br/><br/>
        <button type='submit' className='btn' onClick={handleLogin}>Login</button>
        <p className='boxx'>Do not have an account?</p>
        <a href='/reg' className='btns'>Sign Up</a>
     </div>
   )
 }
 
 export default Login