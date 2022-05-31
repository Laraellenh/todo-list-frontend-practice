import Child from './Child'
import {useState} from 'react'

export default function Parent(){
const [value, setValue] = useState("Update me please, child");
    return(
        <h2 style={{
            marginLeft: "10px",
            color: 'orange'

        }}> Update Parent State Using callback
            <p>Parent</p>
            <p>{value}</p>
            <br></br>
            <Child setValue={setValue}/>
        </h2>
    )
}