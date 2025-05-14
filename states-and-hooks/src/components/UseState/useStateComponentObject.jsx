import { useState } from "react"

function PersonDetails(){
  const [person, setPerson] = useState({
    name:"Peter",
    age:24,
    hobby: "playing golf"
  })
  // const [name, setName] = useState("peter")
  // const [age,setAge] = useState(19)
  // const [hoby, setHoby] = useState("playing golf")

  const onToggleJhon = () =>{
    // setName("Jhon")
    // setAge(24)
    // setHoby("screaming at computer") in this case,after React 18 it does not rerender 3 times, instead it does "batching" and single re-render for all of the updates.

    // setPerson({name:"Jhon", age:26, hobby: "screaming at computer"})
    // setPerson({name:"Jhon"})
    setPerson({...person,name:"Jhon"})

  }

  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.hobby}</h4>
      <button onClick={onToggleJhon}>Show Jhon</button>
    </div>
  )
}
export default PersonDetails