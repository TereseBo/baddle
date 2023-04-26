//dependencies
import { useContext, useState } from "react";
//contexts
import {WarpContext} from '../contexts/warpContext'
//components
import Colorpicker from '../components/Colorpicker'
import Nrinput from "../components/Nrinput"

//style
import "./Preferences.scss"
export default function Preferences() {
    const {threads, setThreads}=useContext(WarpContext)
    const {draftheight, setDraftheight}=useContext(WarpContext)

    return (
        <div className="Preferences">
            <Nrinput value={draftheight} label="rows in draft" submit={setDraftheight} />
            <Nrinput value={threads} label="Warpthreads"submit={setThreads} />
            <Colorpicker name="warp color"/>
            <p>Select your warpcolor and click to set</p>

        </div>
    )
}