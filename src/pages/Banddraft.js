//dependencies
import { useContext } from "react"
//contexts
import { WarpContext } from "../contexts/warpContext"
//components
import Weave from "../components/Weave"
import Preferences from "./Preferences"
import Warp from "../components/Warp"
import Colorlist from "../components/Colorlist"
//style
import "./Banddraft.scss"

export default function Banddraft() {
    const { warp, setWarp } = useContext(WarpContext)

    return (
        <div className="Banddraft">
            <Preferences />

            <Warp />
            <Weave />
        </div>
    )
}