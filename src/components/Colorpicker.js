//dependencies
import { useContext } from "react"
//contexts
import { ColorContext } from '../contexts/colorContext'

export default function Colorpicker({ name }) {
    const { currentColor, setCurrentColor } = useContext(ColorContext)

    function updateCurrentColor(e) {
        setCurrentColor(e.target.value)
    }
    return (
        <form >
            <label htmlFor={name}>{name}</label>
            <input htmlFor={name} value={currentColor} type="color" onChange={updateCurrentColor} />
        </form>
    )
}