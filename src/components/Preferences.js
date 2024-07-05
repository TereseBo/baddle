//dependencies
import { useContext } from "react";
//contexts
import {WarpContext} from '../contexts/warpContext'
//components
import Colorpicker from './Colorpicker'
import Nrinput from "./Nrinput"
import Textcontainer from "./Textcontainer";
//style
import "./Preferences.scss"
export default function Preferences() {
    const {warpthreads, setWarpthreads}=useContext(WarpContext)
    const {draftheight, setDraftheight}=useContext(WarpContext)

    return (
        <div className="Preferences">
            <Nrinput value={draftheight} label="Rows in draft" submit={setDraftheight} max={4}/>
            <Nrinput value={warpthreads} label="Warpthreads"submit={setWarpthreads} max={4} />
            <Colorpicker name="Warp color"/>
            <Textcontainer text="Select your warp color and click to thread in the heddle"/>


        </div>
    )
}