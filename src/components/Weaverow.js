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

//TODO replace pattern in ckickhandler.
//remove newweave need
//cleanup

export default function Weaverow({ pattern, rowNr }) {

    const [holes, toggleHoles]=useToggle(!(rowNr%2))

    const [tracker2, setTracker2] = useState(rowNr % 2)
    //const [classSet, setClassSet] = useState(setClass())

    const { warp, newweave, setNewweave } = useContext(WarpContext)
    function arrayCompare(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);

    }
    function clickHandler() {
        let copy = newweave.map((item) => item)
        
        if (!holes) {
            //setTracker2(0)
            //setClassSet('Weaverow slits')
            copy[rowNr] = warp[0]
        } else {
            //setTracker2(1)
           // setClassSet('Weaverow holes')
            copy[rowNr] = warp[1]
        }
/*         if (tracker2 === 1) {
            setTracker2(0)
            setClassSet('Weaverow slits')
            copy[rowNr] = warp[0]
        } else {
            setTracker2(1)
            setClassSet('Weaverow holes')
            copy[rowNr] = warp[1]
        } */
        console.log(arrayCompare(copy[rowNr], copy[rowNr - 1]))
        console.log(arrayCompare(copy[rowNr], copy[rowNr + 1]))
        toggleHoles()

        setNewweave(copy)
    }

/*     function setClass() {
        let lols = ''
        holes ? lols = 'Weaverow holes' : lols = 'Weaverow slits'
        return lols
    } */

    return (
        <div key={`row-${rowNr}-container`} className={!holes ? 'Weaverow holes' : 'Weaverow slits'}>
            {pattern.map((cell1, index) =>
                (<Thread color={cell1} key={`row-${rowNr}thread-${index}`} />))}
            <Heddlemove rowNr={rowNr} zRow={/* tracker2 */holes} clickHandler={clickHandler} />

        </div >
    )

}