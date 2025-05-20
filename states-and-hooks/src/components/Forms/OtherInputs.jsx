import { useState } from "react";

function OtherInputs(){
  const data = ['React','Svelte','Angular']
  const [shipping, setShipping] = useState(false);
  const [frameworks, setFrameworks] = useState("")

  const handleCheckBox = (e) =>{
    setShipping(!shipping)
   console.log(e);
  }
  const handleFrameworkChange = (e)=>{
    setFrameworks(e.target.value)
    console.log(e.target.value)
  }

  return(
    <div>
      <form>
        <label htmlFor="shipping">Enable Free Shipping</label>
        <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={handleCheckBox} />


        <label htmlFor="frameworks">Frameworks</label>
        <select id="frameworks"  value={frameworks} onChange={handleFrameworkChange}>
          {data.map((framework)=>{
            return <option key={framework}>{framework}</option>
          })}
        </select>
      </form>
    </div>
  )
}
export default OtherInputs