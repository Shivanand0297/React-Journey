import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Learn = () => {
  return (
    <div>
        <h1>learn</h1>
        <p>all courses are listed here</p>
        <Link to="/learn/courses" >courses</Link>{" "}
        <Link to="/learn/bundle" >bundles</Link>
        <Outlet/> {/*Outlet define where inside the component this componet should appear */}
    </div>
  )
}

export default Learn