import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [err, setErr] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandle = () => {
    console.log(name, password, { role })
    if (name.length === 0 || password.length === 0) {
      setErr(true)
    } else {
      dispatch(signUpUser({ name, password, role }))
      navigate('/')
    }
  }

  return (
    <div className='box'>
      <h2 className='title'>Register</h2>
      <label htmlFor='' className='boxe'>Username</label><br />
      <input type='text' className='boxes' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      {err && name.length <= 0 ?
        <label>Username can't be empty!</label> : ''}<br /><br />
      <label htmlFor='' className='boxe'>Password</label><br />
      <input type='password' className='boxes' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      {err && password.length <= 0 ? <label>Password can't be empty!</label> : ''} <br /><br />
      <label htmlFor='' className='boxe'>User</label>
      <input type='radio' className='btnn' name='role' value='user' onChange={(e) => setRole(e.target.value)} /><br />
      <label htmlFor='' className='boxe'>Admin</label>
      <input type='radio' name='role' value='admin' onChange={(e) => setRole(e.target.value)} /><br /><br />
      <button onClick={registerHandle} className='btn'>Register</button>
    </div>
  )
}

export default Register