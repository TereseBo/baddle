//dependencies
import { createContext, useState, useEffect } from "react";
import { threads, draftRows } from '../variables/weavespec'

//exports
export const WarpContext = createContext()
export function WarpProvider({ children }) {
    const [warpthreads, setWarpthreads] = useState(threads)
    const [draftheight, setDraftheight] = useState(draftRows)
    const [warp, setWarp] = useState([new Array(warpthreads / 2).fill('', 0, warpthreads / 2), new Array(warpthreads / 2).fill('', 0, warpthreads / 2)])
    const [weaveArea, setWeaveArea] = useState(() => { return new Array(draftheight).fill('', 0, draftheight) })
    //TODO: Clenaup
    //Replace alla instances of warpthreads/2
    //Handle input of uneven numbers in threads


    useEffect(() => {
        console.log('I reset weave height')
        setWeaveArea(new Array(draftheight).fill('', 0, draftheight))

    }, [draftheight])
    useEffect(() => {
     
        console.log('I re ran warp')
        setWarp(prevWarp => {
            const lengthDiff = (warpthreads / 2) - prevWarp[0].length

            console.log('warpthreads:', warpthreads, 'arr.length', warp[0].length, 'diff:', lengthDiff)
            let newValue = []
          

            lengthDiff < 0 ?
                newValue = [prevWarp[0].toSpliced(warpthreads / 2), prevWarp[1].toSpliced(warpthreads / 2)]
                :
                newValue = [prevWarp[0].concat(new Array(lengthDiff).fill('', 0, lengthDiff)), prevWarp[1].concat(new Array(lengthDiff).fill('', 0, lengthDiff))]
            console.log(newValue)
            return newValue
        })

    }, [warpthreads])

    return (
        <WarpContext.Provider value={{ weaveArea, warp, setWarp, draftheight, setDraftheight, warpthreads, setWarpthreads }}>
            {children}
        </WarpContext.Provider>
    )
}

