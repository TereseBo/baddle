//dependencies
import { createContext, useState, useEffect } from "react";
import { threads, draftRows } from '../variables/weavespec'

//exports
export const WarpContext = createContext()
export function WarpProvider({ children }) {
    const [warpthreads, setWarpthreads] = useState(threads)
    const [draftheight, setDraftheight] = useState(draftRows)
    //const [warp, setWarp] = useState([new Array(warpthreads / 2).fill('', 0, warpthreads / 2), new Array(warpthreads / 2).fill('', 0, warpthreads / 2)])
    const [warp, setWarp] = useState([new Array(Math.ceil(warpthreads / 2)).fill('', 0, Math.ceil(warpthreads / 2)), new Array(Math.floor(warpthreads / 2)).fill('', 0, Math.floor(warpthreads / 2))])
    const [weaveArea, setWeaveArea] = useState(() => { return new Array(draftheight).fill('', 0, draftheight) })
    //TODO: Clenaup
    //Replace alla instances of warpthreads/2
    //Handle input of uneven numbers in threads


    useEffect(() => {

        setWeaveArea(new Array(draftheight).fill('', 0, draftheight))

    }, [draftheight])
    useEffect(() => {

         setWarp(prevWarp => {

            const lengthDiff = (warpthreads / 2) - prevWarp[0].length

            let newValue = []

            lengthDiff < 0 ?
                newValue = [prevWarp[0].toSpliced(Math.ceil(warpthreads / 2)), prevWarp[1].toSpliced(Math.floor(warpthreads / 2))]
                :
                newValue = [prevWarp[0].concat(new Array(Math.ceil(lengthDiff)).fill('', 0, Math.ceil(lengthDiff))), prevWarp[1].concat(new Array(Math.floor(lengthDiff)).fill('', 0, Math.floor(lengthDiff)))]
            return newValue
        })

    }, [warpthreads])

    return (
        <WarpContext.Provider value={{ weaveArea, warp, setWarp, draftheight, setDraftheight, warpthreads, setWarpthreads }}>
            {children}
        </WarpContext.Provider>
    )
}

