import Thread from "./Thread"
import "./Warp.scss"

export default function Weaverow({ slits, holes }) {
    return (
        <div className="Weaverow">
            <div className="slits" key="slits">
            {slits.map((cell1, index )=>
                (<div><Thread key={`slit-${index}`}/> </div>))}
        </div>
        <div className="holes" key="holes">
            {holes.map((cell2, index) =>
                (<div><Thread key={`hole-${index}`}/> </div>))}
        </div>
        </div >
    )

}