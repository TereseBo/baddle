import { createContext, useState } from "react";

export const WarpContext=createContext()

export function WarpProvider({children}){
    const [threads, setThreads]=useState(38)
    const [draftheight, setDraftheight]=useState(50)
    const [warp, setWarp]=useState([new Array(threads/2).fill('',0,threads/2),new Array(threads/2).fill('',0,threads/2)])
    const [weave, setWeave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))

    return(
        <WarpContext.Provider value={{warp, setWarp,threads, setThreads, draftheight, setDraftheight, weave, setWeave}}>
            {children}
        </WarpContext.Provider>
    )
}

