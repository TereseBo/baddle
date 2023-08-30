
//dependencies
import { useContext} from "react";
//context
import {WarpContext} from '../contexts/warpContext'
//components
import Weaverow from "./Weaverow"
//style
import "./Weave.scss"

export default function Weave() {
    const { newweave}=useContext(WarpContext)

    return (
        <div className="Weave">
            {newweave.map((row, index)=>
            (<Weaverow rowNr={index} key={"weaverow"+index}/>))}
        </div>
    )
}

