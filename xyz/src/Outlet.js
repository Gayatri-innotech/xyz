import React from 'react'
import { Navigate } from 'react-router-dom'

const Outlet = ({role, xyz}) => {
    if (role === admin ){
        return <Navigate to = '/homes'/>
    } else {
        <Navigate to= '/userPoll'/>
    }
  return xyz;
}

export default Outlet