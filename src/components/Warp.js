
//dependencies
import { useContext } from "react";
//contexts
import { WarpContext } from '../contexts/warpContext'
import {ColorContext} from '../contexts/colorContext'
//components
import Thread from "./Thread"
//style
import "./Warp.scss"

//TODO:Add displaybox of colors in warp

export default function Warp() {

    const { warp, setWarp } = useContext(WarpContext)
    const {currentColor} = useContext(ColorContext)

    function setBackgroundColor(e){
      const warpCopy= warp.map((item=>item))
      warpCopy[e.target.dataset.row][e.target.dataset.index]=currentColor
      setWarp(warpCopy)
      console.log(warp[1])
    }
    return (

            <div className="Warp" >
                <div className="slits" key="slits">
                    {warp[0].map((cell1, index) =>
                        (<Thread key={`slit-${index}`} onClick={setBackgroundColor} row={0} index={index} color={cell1}/>))}
                </div>
                <div className="holes" key="holes">
                    {warp[1].map((cell2, index) =>
                        (<Thread key={`hole-${index}`} onClick={setBackgroundColor} row={1} index={index} color={cell2}/>))}
                </div>
            </div >
    )
}