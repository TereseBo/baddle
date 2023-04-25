import Heddlemove from "./Heddlemove"
import Thread from "./Thread"
import "./Weaverow.scss"

export default function Weaverow({ pattern, rowNr}) {

    return (
        <div key={`row-${rowNr}-container`} className="Weaverow">
            {pattern.map((cell1, index )=>
                (<Thread color={cell1} key={`row-${rowNr}slit-${index}`} />))}
                <Heddlemove rowNr={rowNr}zRow={rowNr%2}/>

        </div >
    )

}