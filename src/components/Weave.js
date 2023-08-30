
//dependencies
import { useContext} from "react";
//context
import {WarpContext} from '../contexts/warpContext'
//components
import Weaverow from "./Weaverow"
//style
import "./Weave.scss"

export default function Weave() {
    const { weaveArea}=useContext(WarpContext)

    return (
        <div className="Weave">
            {weaveArea.map((row, index)=>
            (<Weaverow rowNr={index} key={"weaverow"+index}/>))}
        </div>
    )
}

