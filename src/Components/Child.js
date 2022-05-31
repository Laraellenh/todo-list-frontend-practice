
export default function Child({setValue}){
    return(
        <h1>Child
            
            <button
            
            onClick = {()=> setValue("Parent has been updated")}>
                Change parent value, please
            </button>
           
        </h1>
    )

}