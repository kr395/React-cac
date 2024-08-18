import { createContext,useContext } from "react";

export const ThemeContext = createContext({
  themeMode : "light",
  darkTheme : ()=>{},
  lightTheme : ()=>{},
});

export const ThemeContextProvider = ThemeContext.Provider;

//Created Own Hook 
export default function useTheme(){
    return useContext(ThemeContext);

}