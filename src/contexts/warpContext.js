import { createContext, useState } from "react";

export const WarpContext=createContext()

export function WarpProvider({children}){

    const [warp, setWarp]=useState([[],[]])
    const [threads, setThreads]=useState(38)
    const [draftheight, setDraftheight]=useState(50)

    return(
        <WarpContext.Provider value={{warp, setWarp,threads, setThreads, draftheight, setDraftheight}}>
            {children}
        </WarpContext.Provider>
    )
}

