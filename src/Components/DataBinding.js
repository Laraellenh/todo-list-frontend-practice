
import { useState } from "react"


 export default function DataBinding(){
    const [dataValue, setDataValue] = useState("")
    return(
        <>
        <input
        type = "text"
        placeholder="Type Here"
        value ={dataValue}
        onChange = {(e)=>setDataValue(e.target.value) }
       />
       <p>{dataValue}</p>
        </>
    )
}