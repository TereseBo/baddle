import Warp from "../components/Warp"
import { useState, useContext } from "react"
import Weave from "../components/Weave"
import "./Banddraft.scss"
import Nrinput from "../components/Nrinput"

import fillStateArr from "../functions/fillStateArr"
import { WarpContext } from "../contexts/warpContext"

export default function Banddraft() {
    const {warp, setWarp}=useContext(WarpContext)

    return (
        <div className="Banddraft">

            <p>Band draft</p>
            <Weave/>
            <Warp />
        </div>
    )
}