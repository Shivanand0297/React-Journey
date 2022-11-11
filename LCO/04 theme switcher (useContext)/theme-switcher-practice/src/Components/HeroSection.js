import ThemeContext from "../Context/ThemeContext";
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
        <h1>this is a test for Theme Toggler</h1>
    </div>
  )
}

export default HeroSection