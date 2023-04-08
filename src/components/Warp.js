import Thread from "./Thread"
import "./Warp.scss"

export default function Warp({ slits, holes }) {
    return (
        <div className="Warp" >
            <div className="slits" key="slits">
            {slits.map((cell1, index )=>
                (<Thread key={`slit-${index}`}/> ))}
        </div>
        <div className="holes" key="holes">
            {holes.map((cell2, index) =>
                (<Thread key={`hole-${index}`}/> ))}
        </div>
        </div >
    )

}