import Colorcomp from "./Colorcomp"
import { WarpContext } from "../contexts/warpContext"
import { useContext } from "react"
import './Colorlist.scss'
export default function Colorlist() {

    const { warp } = useContext(WarpContext)

    let warpSequence = []

    warp[0].map((color, index) => {
        if (warpSequence.length > 0) {

            warpSequence[warpSequence.length - 1].color === warp[0][index] ? warpSequence[warpSequence.length - 1].threads += 1 : warpSequence.push({ color: warp[0][index], threads: 1 })
            if (warpSequence[warpSequence.length - 1].color === '') warpSequence.pop()
            warpSequence[warpSequence.length - 1].color === warp[1][index] ? warpSequence[warpSequence.length - 1].threads += 1 : warpSequence.push({ color: warp[1][index], threads: 1 })
        } else {
            if (warp[0][index] !== '') warpSequence.push({ color: warp[0][index], threads: 1 })
            warp[0][index] === warp[1][index] ? warpSequence.push({ color: warp[0][index], threads: 2 }) : warpSequence.push({ color: warp[1][index], threads: 1 })

        }
        if (warpSequence[warpSequence.length - 1].color === '') warpSequence.pop()

    })

    return (
        <>
            {
                warpSequence ?
                    (<div className="color-list">
                        <h3>{'Warp order:'}</h3>
                        {warpSequence.map((color, index) => (
                            color.color === '' ? null : <div key={color + index} className="color-item">{color.threads}<Colorcomp key={index + color.color} color={color.color} /></div>

                        ))}
                    </div>) : (null)

            }
        </>
    )
}