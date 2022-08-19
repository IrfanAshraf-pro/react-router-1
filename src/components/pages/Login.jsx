import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const location = useLocation()
    console.log(location);
  return (
    <div>
          Login
          <h1>{ location?.state.user}</h1>
    </div>
  )
}

export default Login
