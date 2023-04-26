import Warp from "../components/Warp"
import { useContext } from "react"
import Weave from "../components/Weave"
import "./Banddraft.scss"
import { WarpContext } from "../contexts/warpContext"
import Preferences from "./Preferences"

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