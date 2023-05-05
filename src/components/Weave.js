
//dependencies
import { useContext, useState, useEffect } from "react";
//context
import {WarpContext} from '../contexts/warpContext'
//components
import Weaverow from "./Weaverow"
//style
import "./Weave.scss"

export default function Weave() {
    const { warp, threads, draftheight}=useContext(WarpContext)
    const [newweave, setNewweave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))
    
    useEffect(()=>{
    const wc=newweave.map((item, index)=>{
        console.log(item)
        if(index%2==1){
            return item= warp[1]
        }else{
           return item=warp[0]
        }})   
        setNewweave(wc)  
    },[warp])
    return (
        <div className="Weave">
            {newweave.map((row, index)=>
            (<Weaverow pattern={row} rowNr={index} key={"weaverow"+index}/>))}


        </div>
    )
}

