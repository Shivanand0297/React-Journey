import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const CourseID = () => {
  const Navigate = useNavigate()
    const {courseID} = useParams()
  return (
    <div>params is : {courseID} 
    <button
    onClick={()=>{
      // Navigate(1)  // to navigate one page forword
      // Navigate(-1) // to navigate one page backword

      Navigate("/dashboard", {
        state: "Price: 399 Rs"  //to navigate to this route with this information
      } )
    }}
    >
      Read more
    </button>
    <Link to={"/dashboard"} state={courseID}>test link</Link> 
    </div>
    // can also use link for navigate to route with this information

  )
}

export default CourseID