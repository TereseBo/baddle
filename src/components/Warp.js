import Thread from "./Thread"
import "./Warp.scss"
import { useContext, useState } from "react";
import {WarpContext} from '../contexts/warpContext'


export default function Warp() {
    const {warp, setWarp}=useContext(WarpContext)
    return (
        <div className="Warp" >
            <div className="slits" key="slits">
            {warp[0].map((cell1, index )=>
                (<Thread key={`slit-${index}`}/> ))}
        </div>
        <div className="holes" key="holes">
            {warp[1].map((cell2, index) =>
                (<Thread key={`hole-${index}`}/> ))}
        </div>
        </div >
    )

}