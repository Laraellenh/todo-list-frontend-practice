import {useState} from 'react'

export default function SumTwoNum(){
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [total, setTotal] = useState(0);

    function calculateTotal(){
        setTotal(value1 + value2);
    }

    return(
        <div
        style={{
            marginLeft: "10px"
        }}>
            <h2>Add two numbers</h2>
                <input
                    placeholder='First Number'
                    type = "number"
                    value = {value1}
                    onChange={(e)=> setValue1(+e.target.value)}
                    />
                <input
                    placeholder='Second Number'
                    type = "number"
                    value = {value2}
                    onChange={(e)=> setValue2(+e.target.value)}
                    />
                <button
                    onClick = {calculateTotal}
                    > Add Two Numbers </button>
                <p> Sum: {total || ""} </p>
        </div>
    )
}