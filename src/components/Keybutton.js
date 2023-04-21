import "./Keybutton.scss"

export default function Keybutton({onClick, text}){
    return(
        <button className="Keybutton" onClick={onClick}>{text}</button>
    )
}