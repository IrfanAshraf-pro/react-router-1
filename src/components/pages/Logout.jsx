import React from 'react'
import { useLocation } from 'react-router-dom'

const Logout = () => {
    const location=useLocation()
  return (
    <div>
          Logout
          {location?.state.name}
    </div>
  )
}

export default Logout
