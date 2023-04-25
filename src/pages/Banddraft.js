import Warp from "../components/Warp"
import { useContext } from "react"
import Weave from "../components/Weave"
import "./Banddraft.scss"
import { WarpContext } from "../contexts/warpContext"

export default function Banddraft() {
    const {warp, setWarp}=useContext(WarpContext)

    return (
        <div className="Banddraft">
            <p>Select your warpcolor and click to set</p>
            <Warp />
            <Weave/>
        </div>
    )
}