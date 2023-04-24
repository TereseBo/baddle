import Keybutton from "./Keybutton";

export default function ({ rowNr }) {
    {
        return(
        rowNr % 2 == 1 ? (<div><Keybutton text="↑" /><Keybutton active={true}  text="↓" /></div>) :
        (<div><Keybutton active={true} text="↑"/><Keybutton text="↓" /></div>)
        )
    }


}