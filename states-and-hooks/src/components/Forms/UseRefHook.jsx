import { useEffect, useRef, useState } from "react"

function UseRefHook (){
  const [input,setInput] = useState("");
  const refContainer = useRef("");
  const refuseEffectController = useRef(false)

  useEffect(()=>{
    if (!refuseEffectController.current){
      refuseEffectController.current = true;
      return
    }
    console.log("use effect triggered")
  },[input])


  const handleSubmit = (e)=>{
    e.preventDefault() 
    const input = refContainer.current;
    input.focus()
    
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>random input</label>
        <input type="text" name="" id="text" value={input} onChange={(e)=>setInput(e.target.value)} ref={refContainer}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default UseRefHook