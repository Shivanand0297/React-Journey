import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Courses = () => {

  const courseList = ["react", "angular", "vue", "nodejs"]
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]

  return (
    <>
    <div>Courses</div>
    <h1> all the courses are listed here</h1>

    <p>More tech</p>
    <NavLink 
    style={({isActive})=>{
      return{
        backgroundColor: isActive ? "pink" : "yellow"
      }
    }}
    to={`/learn/courses/${randomCourseName}`} >
      {randomCourseName}
    </NavLink>{" "}
    <NavLink to={`/learn/courses/tests`} >
      tests
    </NavLink>  {/* to highlight the current tab or to add some property to it like backgroundcolor */}

    <Outlet/> {/* to display the course id from params we are rendering inside the course component */}
    </>
  )
}

export default Courses