//dependencies
import { useContext } from "react"
//contexts
import { ColorContext } from '../contexts/colorContext'
//style
import './Colorpicker.scss';

export default function Colorpicker({ name }) {
    const { currentColor, setCurrentColor } = useContext(ColorContext)

    function updateCurrentColor(e) {
        setCurrentColor(e.target.value)
    }
    return (
        <form className="Colorpicker">
            <label htmlFor={name}>{name}</label>
            <input htmlFor={name} value={currentColor} type="color" onChange={updateCurrentColor} />
        </form>
    )
}