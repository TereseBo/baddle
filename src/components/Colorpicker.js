import { useContext, useState } from "react"
import { ColorContext } from '../contexts/colorContext'

export default function Colorpicker({ name }) {
    const { currentColor, setCurrentColor } = useContext(ColorContext)

    function updateCurrentColor(e) {
        setCurrentColor(e.target.value)
        console.log(currentColor)
    }
    return (
        <form >
            <label htmlFor={name}>{name}</label>
            <input htmlFor={name} value={currentColor} type="color" onChange={updateCurrentColor} />
        </form>
    )
}