import Weaverow from "./Weaverow"
import "./Weave.scss"
import { useContext, useState } from "react";
import {WarpContext} from '../contexts/warpContext'
import { useEffect } from "react"

export default function Weave() {
    const { warp, threads, draftheight}=useContext(WarpContext)
    const [newweave, setNewweave]=useState(new Array(draftheight).fill(new Array(threads/2).fill('',0,threads/2),0,draftheight))
    
    useEffect(()=>{
    const wc=newweave.map((item, index)=>{
        console.log(item)
        if(index%2==1){
            console.log(warp)
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

