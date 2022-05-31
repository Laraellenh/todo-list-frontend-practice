
export default function Child({setValue}){
    return(
        <h3>Child
            
            <button
            
            onClick = {()=> setValue("Parent has been updated")}>
                Change parent value, please
            </button>
           
        </h3>
    )

}