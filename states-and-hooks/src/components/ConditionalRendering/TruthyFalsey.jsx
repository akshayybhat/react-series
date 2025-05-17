import { useState } from "react"

function TruthyFalsey(){

  const [name, setName] = useState(null);

  const [food, setFood] = useState("Pizza")

  return(
    <div>
      <div>Short Circuit</div>
      <div>
        <h2>{name && food}</h2>
        <h2>{food && name}</h2>
        <h2>{name && name}</h2>
        <h2>{food && "hello"}</h2>
        <h2>{food ||  "hello"}</h2>
        {/* <h2>{name || food}</h2>
        <h2>{food || name}</h2>
        <h2>{name || name}</h2>
        <h2>{food || food}</h2> */}
      </div>
    </div>
  )
}
export default TruthyFalsey