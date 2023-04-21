import {useState} from 'react';

export default function Nrinput({ label, value, submit}) {
    const [valuestate, setValuestate]=useState(value)
    function saveChange(e){
        setValuestate(parseInt(e.target.value))
        console.log(valuestate)
    }
    function handleSubmit(e){
        e.preventDefault()
        submit(valuestate)
        console.log(valuestate)
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>{label}</label> <input defaultValue={value} type="number" onChange={saveChange}/>
        <button > Set</button>
        </form>
            )

}