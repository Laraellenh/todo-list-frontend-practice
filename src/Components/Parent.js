import Child from './Child'
import {useState} from 'react'

export default function Parent(){
const [value, setValue] = useState("Update me please, child");
    return(
        <h3 style={{
            marginLeft: "10px",
            
        }}> Update Parent State Using callback
            <p>Parent</p>
            <h6>{value}</h6>
            <br></br>
            <Child setValue={setValue}/>
        </h3>
    )
}