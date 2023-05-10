
//dependencies
import { useContext, useState, useEffect } from "react";
//context
import {WarpContext} from '../contexts/warpContext'
//components
import Weaverow from "./Weaverow"
//style
import "./Weave.scss"

export default function Weave() {
    const { warp, threads, draftheight, newweave, setNewweave}=useContext(WarpContext)
    //const [newweave, setNewweave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))

    return (
        <div className="Weave">
            {newweave.map((row, index)=>
            (<Weaverow pattern={row} rowNr={index} key={"weaverow"+index} weave={newweave} setweave={setNewweave}/>))}


        </div>
    )
}

