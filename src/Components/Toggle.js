import {useState} from 'react'
export default function Toggle(){
// set state for display to true
    const [displayElement, setDisplayElement] = useState(true);
  
  

    return (
      <>
      {/* callback sets to not display and change the copy based on state */}
        <button style={{
        marginLeft: "10px",
        fontFamily: "fantasy"
      }}
        onClick = {()=>setDisplayElement(!displayElement)} >
          {displayElement ? "Hide Element Below" : "Show Element Below"}
          </button>
        {displayElement &&  <div style={{
        marginLeft: "10px",
        fontFamily: "fantasy"
      }} >Toggle Challenge</div>}
  
       
      </>
    );
}