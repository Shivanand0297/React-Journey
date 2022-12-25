/* import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";
import Apptheme from "../Colors";

const HeroSection = () => {
    const themeDefault = useContext(ThemeContext)[0]
    const currentTheme = Apptheme[themeDefault]
  return (
    <div style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.color}`,
        border: `${currentTheme.border}`,
        height: "90vh",

    }}>
        <h1>this is HeroSection</h1>
    </div>
  )
}

export default HeroSection */


import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import Apptheme from "../Colors"

const HeroSection = () => {

  const [defaultTheme, setDefaultTheme] = useContext(ThemeContext)
     const currentTheme = Apptheme[defaultTheme]

  return (
    <div style={{
      color: `${currentTheme.color}`,
      backgroundColor: `${currentTheme.backgroundColor}`,
      height: "90vh"
    }}>
      <h1>this is hero section</h1>
      <button
      onClick={()=>{
        setDefaultTheme(defaultTheme === "light" ? "dark" : "light")
      }}
      >click me</button>
    </div>
  )
}

export default HeroSection