import { useState } from "react"

function MultipleReturnsForms (){

  const [user,setUser] = useState({
    name:"",
    email:"",
    password: ""
  })  

  const handleChange = (e)=>{
    console.log(user)
    const property = e.target.name;
    const value = e.target.value
    setUser({...user, [property]:value})
  }

  return (
    <div>
      <form >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={user.name} onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={user.email} onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={user.password} onChange={handleChange}/>
      </form>
    </div>
  )
}
export default MultipleReturnsForms