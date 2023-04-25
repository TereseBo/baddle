import Keybutton from "./Keybutton";
import { useContext, useState } from "react";
import { WarpContext } from '../contexts/warpContext'
export default function ({ zRow, rowNr }) {
    const [tracker, setTracker] = useState(zRow)

    const { weave, setWeave, warp, setWarp } = useContext(WarpContext)
    function clickHandler() {

        const weaveCopy = warp.map((item => item))
        weaveCopy[rowNr] = warp[tracker]
        setWarp(weaveCopy)
        tracker==1? setTracker(0):setTracker(1)
        



    }

    
        return (
            tracker === 1 ? (<div><Keybutton text="↑" /><Keybutton active={true} text="↓" /></div>) :
                (<div><Keybutton active={true} text="↑" /><Keybutton text="↓" /></div>)
        )
    


}