import Keybutton from "./Keybutton";
import { useContext, useState } from "react";
import { WarpContext } from '../contexts/warpContext'
import './Heddlemove.scss'
export default function ({ zRow, rowNr, setTracker2 }) {
    const [tracker, setTracker] = useState(zRow)

    const { warp, setWarp } = useContext(WarpContext)
    function clickHandler() {

        const weaveCopy = warp.map((item => item))
        weaveCopy[rowNr] = warp[tracker]
        setWarp(weaveCopy)
        zRow==1? setTracker2(0):setTracker2(1)
    }
        return (
            tracker === 1 ? (<div className="Heddlemove"><Keybutton text="↑" /><Keybutton active={true} text="↓" /></div>) :
                (<div className="Heddlemove"><Keybutton active={true} text="↑" /><Keybutton text="↓" /></div>)
        )
}