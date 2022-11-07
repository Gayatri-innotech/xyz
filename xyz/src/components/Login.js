import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../redux/reducer/authSlice';
import { NavLink, useNavigate } from 'react-router-dom'
import './style.css'
import { GetApiDetailsUser } from '../api/axiosRequest';

const Login = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const authState = useSelector(state => state.authSlice)
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(username, pass)
    if (username.length === 0 || pass.length === 0) {
      setError(true)
    } else {
      dispatch(signInUser({ username, pass }))
    }
  }
  console.log(authState);

  useEffect(() => {
    if (authState?.user) {
      navigate('/homes')
    }
  }, [authState])

  return (
    <div className='contain'>
      <h2 className='sub'>Login</h2>
      {authState.error}<br />

      <label htmlFor='' className='boxe'>Username</label><br />
      <input
        type='text'
        className='boxes'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} /><br />

      {error && username.length <= 0 ?
        <label
          className='error'>Username can't be empty!</label> : ''}<br /><br />

      <label
        htmlFor='' className='boxe'>Password</label><br />
      <input
        type='password'
        className='boxes'
        placeholder='Password'
        value={pass}
        onChange={(e) => setPass(e.target.value)} /><br />

      {error && pass.length <= 0 ?
        <label
          className='error'>
          Password can't be empty!
        </label> : ''}<br /><br />

      <button
        type='submit'
        className='btn1'
        onClick={handleLogin}>Login</button>

      <p
        className='boxx'>
        Do not have an account?
      </p>
      <NavLink to='/reg' className='btns'>Sign Up</NavLink>
    </div>
  )
}

export default Login