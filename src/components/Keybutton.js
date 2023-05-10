//components
import "./Keybutton.scss"

export default function Keybutton({onClick, text, active}){
    return(
        !active?( <button className="Active Keybutton" >{text}</button>):( <button className="Keybutton" onClick={onClick}>{text}</button>)
    )
}