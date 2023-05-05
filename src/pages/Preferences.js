//dependencies
import { useContext } from "react";
//contexts
import {WarpContext} from '../contexts/warpContext'
//components
import Colorpicker from '../components/Colorpicker'
import Nrinput from "../components/Nrinput"
import Textcontainer from "../components/Textcontainer";

//style
import "./Preferences.scss"
export default function Preferences() {
    const {threads, setThreads}=useContext(WarpContext)
    const {draftheight, setDraftheight}=useContext(WarpContext)

    return (
        <div className="Preferences">
            <Nrinput value={draftheight} label="Rows in draft" submit={setDraftheight} max={4}/>
            <Nrinput value={threads} label="Warpthreads"submit={setThreads} max={4} />
            <Colorpicker name="Warp color"/>
            <Textcontainer text="Select your warp color and click to thread in the heddle"/>


        </div>
    )
}