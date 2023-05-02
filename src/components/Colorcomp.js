import Thread from './Thread.js'

export default function Colorcomp({color, onClick}){
    return(
        <div>
            <Thread color={color} onClick={onClick}/>
        </div>
    )
}