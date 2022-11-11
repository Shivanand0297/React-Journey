import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () =>{
    const [theme, setTheme] = useContext(ThemeContext)  //by default setting ThemeContext

    return(
        <button 
        onClick={()=>{
            setTheme(theme==="light" ? "dark" : "light")
            }}>
        {theme==="light" ? "Turn on the dark mode" : "Turn on the light mode"}
        </button>
    )
}

export default ThemeToggler