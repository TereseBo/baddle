//dependencies
import { useContext, useState } from "react";
//contexts
import { WarpContext } from '../contexts/warpContext'
//components
import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
//style
import "./Weaverow.scss"

import useToggle from "../hooks/useToggle";

//TODO 
//
//cleanup

export default function Weaverow({ pattern, rowNr }) {
    const { warp, newweave, setNewweave } = useContext(WarpContext)
    const [holes, toggleHoles] = useToggle(!(rowNr % 2))
const[patsy, setPatsy]=useState(holes? warp[0]:warp[1])


    function clickHandler() {
        //let copy = newweave.map((item) => item)
        //!holes ? copy[rowNr] = warp[0] : copy[rowNr] = warp[1]
        //console.log(warp[1])

        toggleHoles()

       // setNewweave(copy)
    }
//console.log(patsy)
    return (
        <div key={`row-${rowNr}-container`} className={!holes ? 'Weaverow holes' : 'Weaverow slits'}>
            {patsy.map((cell1, index) =>
                (<Thread color={cell1} key={`row-${rowNr}thread-${index}`} />))}
            <Heddlemove rowNr={rowNr} zRow={/* tracker2 */holes} clickHandler={clickHandler} />

        </div >
    )

}