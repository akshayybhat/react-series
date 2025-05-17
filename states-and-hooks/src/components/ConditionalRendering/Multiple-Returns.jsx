import { useEffect, useState } from "react"

function MultipleReturns (){

  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{

    //side effect
    setTimeout(()=>{
      //fetch data here. once finished set isLoading to false
      setIsLoading(false)
    },3000)

  }, [])

  if(isLoading){
    return (
      <h2>Loading....</h2>
    )
  }

  return(
    <h2>My Application</h2>
  )
}
export default MultipleReturns