//dependencies
import { createContext, useState, useEffect } from "react";
import { threads, draftRows } from '../variables/weavespec'

//exports
export const WarpContext = createContext()
export function WarpProvider({ children }) {
    const [warpthreads, setWarpthreads] = useState(threads)
    const [draftheight, setDraftheight] = useState(draftRows)
    const [warp, setWarp] = useState([new Array(warpthreads / 2).fill('', 0, warpthreads / 2), new Array(warpthreads / 2).fill('', 0, warpthreads / 2)] )
    const [weaveArea, setWeaveArea] = useState(() => { return new Array(draftheight).fill('', 0, draftheight) })

    useEffect(() => {
        console.log('I reset weave height')
        setWeaveArea(new Array(draftheight).fill('', 0, draftheight))

    }, [draftheight])
    useEffect(() => {
        //const lengthDiff=warpthreads / 2 < warp[0].length
        console.log('I re ran warp')
        setWarp(prevWarp=>{
            const lengthDiff=(warpthreads / 2 )- prevWarp[0].length

            console.log('warpthreads:', warpthreads, 'arr.length', warp[0].length, 'diff:', lengthDiff)
            let newValue=[]
            debugger
            lengthDiff<0? 
            newValue=[prevWarp[0].toSpliced(warpthreads/2), prevWarp[1].toSpliced(warpthreads/2)]
            :
            newValue=[prevWarp[0].concat(new Array(lengthDiff).fill('', 0, lengthDiff)), prevWarp[1].concat(new Array(lengthDiff).fill('', 0, lengthDiff))]
            console.log(newValue)
            return newValue
        })
        
        //(lengthDiff<0)?setWarp(()=>{return[warp[0].toSpliced(0,lengthDiff), warp[1].toSpliced(0,lengthDiff)] }):setWarp(()=>{return[warp[0], new Array(lengthDiff).fill('',0)] })

/*         let copy = []

        if (warpthreads / 2 < warp[0].length) {
            copy = warp.map((item) => {
                return item.toSpliced(warpthreads / 2)
            })
        } else if (warpthreads / 2 > warp[0].length) {
            copy = warp.map((item) => {
                return item.map((item2, index) => {
                    while (index < warpthreads / 2) {
                        item.push('')
                    }
                    return item
                })
            })
        }
        setWarp(copy)
        console.log(copy)
        console.log(warpthreads) */




    }, [warpthreads])

    return (
        <WarpContext.Provider value={{ weaveArea, warp, setWarp, draftheight, setDraftheight, warpthreads, setWarpthreads }}>
            {children}
        </WarpContext.Provider>
    )
}

