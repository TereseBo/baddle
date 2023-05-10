//dependencies
import { createContext, useState, useEffect } from "react";

//exports
export const WarpContext=createContext()
export function WarpProvider({children}){
    const [threads, setThreads]=useState(38)
    const [draftheight, setDraftheight]=useState(50)
    const [warp, setWarp]=useState([new Array(threads/2).fill('',0,threads/2),new Array(threads/2).fill('',0,threads/2)])
    const [newweave, setNewweave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))
    
    useEffect(()=>{
        console.log('I re ran initial weave set')
        const wc=newweave.map((item, index)=>{
            if(index%2===1){
                return item= warp[1]
            }else{
               return item=warp[0]
            }})   
            setNewweave(wc)  
        },[])

    return(
        <WarpContext.Provider value={{warp, setWarp,threads, setThreads, draftheight, setDraftheight, newweave, setNewweave}}>
            {children}
        </WarpContext.Provider>
    )
}

