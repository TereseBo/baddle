//dependencies
import { createContext, useState } from "react";

//exports
export const WarpContext=createContext()
export function WarpProvider({children}){
    const [threads, setThreads]=useState(38)
    const [draftheight, setDraftheight]=useState(50)
    const [warp, setWarp]=useState([new Array(threads/2).fill('',0,threads/2),new Array(threads/2).fill('',0,threads/2)])

    return(
        <WarpContext.Provider value={{warp, setWarp,threads, setThreads, draftheight, setDraftheight}}>
            {children}
        </WarpContext.Provider>
    )
}

