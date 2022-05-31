import {useEffect, useState} from 'react'

function Hooks({hook}){


return(
    <div
    
    style={{
        marginLeft: "10px",
        fontSize: "80%",
        fontFamily: "fantasy",
        color: "hotpink"

    }}> 
    Hook: {hook.hook}
        <p> Function: {hook.function} </p>
        <span> Learn some facts {hook.uses} </span>
    </div>
)
}
export default Hooks;