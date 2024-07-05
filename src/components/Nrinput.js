//dependencies
import {useState} from 'react';
//style
import './Nrinput.scss';

export default function Nrinput({ label, value, submit, max}) {
    const [valuestate, setValuestate]=useState(value)
    function saveChange(e){
        setValuestate(parseInt(e.target.value))
    }
    function handleSubmit(e){
        e.preventDefault()
        submit(valuestate)
    }
    return (
        <form className='Nrinput' onSubmit={handleSubmit}>
        <label>{label}</label> <input defaultValue={value} type="number" min={0} onChange={saveChange}/>
        <button > Set</button>
        </form>
            )

}