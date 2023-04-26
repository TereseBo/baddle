//dependencies
import { useContext, useState } from "react";
//contexts
import {WarpContext} from '../contexts/warpContext'
//components
import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
//style
import "./Weaverow.scss"

export default function Weaverow({ pattern, rowNr}) {
    const { warp, threads, draftheight}=useContext(WarpContext)
    const [tracker2, setTracker2]=useState(rowNr%2)

    function setClass(match){
        let lols=''
        tracker2? lols='Weaverow holes': lols='Weaverow slits'
        return lols
    }

    return (
        <div key={`row-${rowNr}-container`} className={setClass(tracker2)}>
            {pattern.map((cell1, index )=>
                (<Thread color={cell1} key={`row-${rowNr}thread-${index}`} />))}
                <Heddlemove rowNr={rowNr}zRow={tracker2} setTracker2={setTracker2}/>

        </div >
    )

}