//dependencies
import { useContext } from "react"
//contexts
import { useColorContext } from "../contexts/warpContext"
//components
import Weave from "../components/Weave"
import Preferences from "../components/Preferences"
import Warp from "../components/Warp"
import Colorlist from "../components/Colorlist"
//style
import "./Banddraft.scss"

export default function Banddraft() {

    return (
        <div className="Banddraft">
            <div>
                <Preferences />
                <Colorlist color={[]} />
            </div>
            <div className="draft">

                <Warp />
                <Weave />
            </div>
        </div>
    )
}