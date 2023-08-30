//dependencies
import { useContext } from "react";
//contexts
import { WarpContext } from '../contexts/warpContext'
//components
import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
//style
import "./Weaverow.scss"

import useToggle from "../hooks/useToggle";

export default function Weaverow({ rowNr }) {
    const { warp } = useContext(WarpContext)
    const [holes, toggleHoles] = useToggle(!(rowNr % 2))

    function clickHandler() {
        toggleHoles()
    }
    return (
        <div key={`row-${rowNr}-container`} className={!holes ? 'Weaverow holes' : 'Weaverow slits'}>

            {holes ? (
                warp[0].map((cell1, index) =>
                    (<Thread color={cell1} key={`row-${rowNr}thread-${index}`} />))
            ) : (
                warp[1].map((cell1, index) =>
                    (<Thread color={cell1} key={`row-${rowNr}thread-${index}`} />))
            )
            }
            <Heddlemove rowNr={rowNr} zRow={holes} clickHandler={clickHandler} />
        </div >
    )
}