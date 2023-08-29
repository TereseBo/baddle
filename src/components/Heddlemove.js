
//components
import Keybutton from "./Keybutton";
//style
import './Heddlemove.scss'

export default function Heddlemove({ zRow, clickHandler }) {

   
        return (
            zRow ? (<div className="Heddlemove"><Keybutton text="↑"onClick={clickHandler}/><Keybutton active={true} text="↓" onClick={clickHandler}/></div>) :
                (<div className="Heddlemove"><Keybutton active={true} text="↑" onClick={clickHandler} /><Keybutton text="↓" onClick={clickHandler}/></div>)
        )
}