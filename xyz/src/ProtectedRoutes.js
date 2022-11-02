import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const ProtectedRoutes = () => {
  const authRole = useSelector(state=>state.authSlice)

  console.log(authRole)

  useEffect(() => {
   const info = localStorage.getItem('user');

   if (info === 'admin'){
    <Navigate to='/homes'/>
   }else {
    <Navigate to='/userPoll'/>
   }
  },[])
 
return (
    null 
  )
}

export default ProtectedRoutes;

