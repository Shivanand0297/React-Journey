import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation()  //from course id
  return (
    <div>
        <h1>More information {location.state} </h1>
    </div>
  )
}

export default Dashboard