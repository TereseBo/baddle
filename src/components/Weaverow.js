import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
import "./Weaverow.scss"

export default function Weaverow({ pattern, rowNr}) {

    return (
        <div key={`row-${rowNr}-container`} className="Weaverow">
            {pattern.map((cell1, index )=>
                (<div key={`row-${rowNr}slit-${index}`}><Thread /> </div>))}
                <Heddlemove rowNr={rowNr}/>

        </div >
    )

}