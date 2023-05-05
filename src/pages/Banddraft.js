//dependencies
//contexts
//components
import Weave from "../components/Weave"
import Preferences from "./Preferences"
import Warp from "../components/Warp"
import Colorlist from "../components/Colorlist"
//style
import "./Banddraft.scss"

export default function Banddraft() {
    return (
        <div className="Banddraft">
            <Preferences />
            <div className="draft">

                <Warp />
                <Weave />
            </div>
        </div>
    )
}