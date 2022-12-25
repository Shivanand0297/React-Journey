import React from 'react'
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
        this is Header
        <ThemeToggler/>
    </div>
  )
}

export default Header