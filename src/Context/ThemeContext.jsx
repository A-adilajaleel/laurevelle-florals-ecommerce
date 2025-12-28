import { createContext, useState,useEffect } from "react";
import toast from "react-hot-toast";
import{UserContext} from'./UserContext'
import { ProductContext } from "./ProductContext";

export const ThemeContext = createContext()


export const ThemeProvider=({children})=>{

 const [Themes, setThemes] = useState(
        JSON.parse(localStorage.getItem("Themes")) || false
    )
   useEffect(() => {
            localStorage.setItem("Themes", JSON.stringify(Themes));
        }, [Themes]);

const toggletheme=()=>{
   setThemes(!Themes)
}
return (
        <ThemeContext.Provider value={{ Themes, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    )

}