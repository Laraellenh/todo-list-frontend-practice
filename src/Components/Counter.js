import {useState} from 'react'

export default function Counter(){

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1)
    }
    const handleDeleteCountClick = () => {
        setCounter(counter - 1)
    }
    return(
        <div style={{
            fontSize: '120%',
            position: 'relative',
            top: '10vh',
            marginLeft: "20px"
          }}>
             <p
                style={{
                    textAlign: "left",
                    leftMargin: "10px",
                    fontFamily : "cursive"
                }}
             > A Counter Was Born</p>
             {counter}
             <br></br>
            <button 
            style={{
                fontSize: '100%',
                marginLeft: '5px',
                backgroundColor: 'blue',
                borderRadius: '8%',
                color: 'orange',
              }}
            onClick = {handleClick}> Click me to increment </button>
            <div
             style={{
                fontSize: '120%',
                position: 'relative',
                top: '10vh',
              }}>
             
            </div>
            <button 
                style={{
                    fontSize: '100%',
                    marginLeft: '5px',
                    backgroundColor: 'red',
                    borderRadius: '8%',
                    color: 'white',
                }}
            onClick = {handleDeleteCountClick} > Click me to decrement your clicks </button>
        </div >
    )

}