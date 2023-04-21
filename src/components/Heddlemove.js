import Keybutton from "./Keybutton";

export default function ({ rowNr }) {
    console.log(rowNr%2)


    {
        return(
        rowNr % 2 == 1 ? (<div><Keybutton text="Upp" /><Keybutton active={true}  text="Ner" /></div>) :
        (<div><Keybutton active={true} text="Upp" /><Keybutton text="Ner" /></div>)
        )
    }


}