import { useEffect, useState } from "react"

function Cleanup(){
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>TOggle</button>
      {toggle? <h2>Hello there</h2>: <RandomComponent />}
    </div>
  )
}

function RandomComponent(){
  useEffect(()=>{
    // console.log("hello from useEffect")
    const intervalId = setInterval(()=>{
      console.log("hi from interval")
    },1000)
    return (
      function(){
        clearInterval(intervalId)
      }
    )
  }, [])
  return (
    <div>HI From COmponent</div>
  )
}

export default Cleanup