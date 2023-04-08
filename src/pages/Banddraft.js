import Warp from "../components/Warp"
import { useState } from "react"
import Weave from "../components/Weave"
import "./Banddraft.scss"

export default function Banddraft() {

    const [test, setTest] = useState(['', '', '', '', '', '', '', '', '', ''])

    return (
        <div className="Banddraft">
            <p>Band draft</p>
            <Weave slits={test} holes={test} length={50}/>
            <Warp slits={test} holes={test}/>
        </div>
    )
}