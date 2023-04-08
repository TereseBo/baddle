import Thread from "./Thread"
import Weaverow from "./Weaverow"
import "./Weave.scss"
import Warp from "./Warp"

export default function Weave({ holes, slits, length }) {
    const weaveArea = []
    const halfLength = length / 2
    for (let i = 0; i < halfLength, i++;) {
        weaveArea.push(i)
    }
    
    return (
        <div className="Weave">
            {weaveArea.map(dualRow =>
                (<Warp holes={holes} slits={slits} key={'row'+dualRow} />)
                )}
                <p>{weaveArea}</p>
        </div >
    )

}
