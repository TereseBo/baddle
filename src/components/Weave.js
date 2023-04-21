import Thread from "./Thread"
import Weaverow from "./Weaverow"
import "./Weave.scss"
import Warp from "./Warp"
import Heddlemove from "./Heddlemove"
import { useContext, useState } from "react";
import {WarpContext} from '../contexts/warpContext'


export default function Weave() {
    const {warp, setWarp, threads, draftheight}=useContext(WarpContext)
    const [weave, setWeave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))

console.log(weave)
console.log(draftheight)
    
    return (
        <div className="Weave">
            {weave.map((row, index)=>
            (<Weaverow pattern={row} rowNr={index}/>))}


        </div>
    )
}

