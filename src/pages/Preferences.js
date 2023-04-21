import Nrinput from "../components/Nrinput"
import { useContext, useState } from "react";
import {WarpContext} from '../contexts/warpContext'
export default function Preferences() {
    const {threads, setThreads}=useContext(WarpContext)
    const {draftheight, setDraftheight}=useContext(WarpContext)

    return (
        <div>
            <Nrinput value={draftheight} label="rows in draft" submit={setDraftheight} />
            <Nrinput value={threads} label="Warpthreads"submit={setThreads} />
        </div>
    )
}