import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const data = {
    'name':"logging out"
  }
  const navigate=useNavigate()
  return (
    <div>
      Dashboard
      <button onClick={() => {
        navigate('/logout',{state:data})
      }}>Logout</button>
    </div>
  )
}

export default Dashboard
