import { useState } from "react"

function UseStateGotcha(){
  let [count,setCount] = useState(0)

  const handleClick = () => {

    // setTimeout(()=>{
    //   count = count+1
    //   setCount(count)
    // }, 2000)
   
    // setTimeout(()=>{
      
    //   setCount((currentState)=>{
        
    //     return currentState+1
    //   })
    // }, 2000)

    setTimeout(()=>{
      setCount(count+1)
    }, 2000)

  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
export default UseStateGotcha