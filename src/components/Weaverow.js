import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
import "./Weaverow.scss"

export default function Weaverow({ pattern, rowNr}) {

    return (
        <div className="Weaverow">
            {pattern.map((cell1, index )=>
                (<div><Thread key={`slit-${index}`}/> </div>))}
                <Heddlemove rowNr={rowNr}/>

        </div >
    )

}