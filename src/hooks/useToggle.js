import {useState } from 'react'

function useToggle(input = true ){


    const [value, setValue]= useState(Boolean(input))

    function toggleValue(){
        setValue((currentValue)=>!currentValue)
    }

    return[value, toggleValue]


}

export default useToggle