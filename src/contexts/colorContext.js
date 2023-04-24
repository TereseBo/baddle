import { createContext, useState } from "react";

export const ColorContext=createContext()

export function ColorProvider({children}){
    const [currentColor, setCurrentColor]=useState('#000000')

    return(
        <ColorContext.Provider value={{currentColor,setCurrentColor}}>
            {children}
        </ColorContext.Provider>
    )
}

