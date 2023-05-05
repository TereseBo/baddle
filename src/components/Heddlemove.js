import { useContext } from "react";
//contexts
import { WarpContext } from '../contexts/warpContext'
//components
import Keybutton from "./Keybutton";
//style
import './Heddlemove.scss'

export default function Heddlemove({ zRow, rowNr, setTracker2 }) {
    //const { warp, setWarp } = useContext(WarpContext)
    function clickHandler() {
        console.log("click!")

/*         const weaveCopy = warp.map((item => item))
        weaveCopy[rowNr] = warp[zRow]
        setWarp(weaveCopy)
        zRow===1? setTracker2(0):setTracker2(1) */
    }
        return (
            zRow === 1 ? (<div className="Heddlemove"><Keybutton text="↑" /><Keybutton active={true} text="↓" /></div>) :
                (<div className="Heddlemove"><Keybutton active={true} text="↑" /><Keybutton text="↓" onClick={clickHandler}/></div>)
        )
}