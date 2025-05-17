import { useState } from "react"

function UserChallenge(){
  const [user, setUser] = useState(null)

  const onLogout = () =>{
    setUser(null)
  }
  const onLogin = ()=>{
    setUser({name:"Richard"})
  }

  return (
    <section>

      {user ? 
      <div>
        <h2>hello there {user.name}</h2>
        <button onClick={onLogout}>Logout</button>
      </div> :
      <div>
        <h2>Please Login</h2>
        <button onClick={onLogin}>Login</button>
      </div>
      }

      

      

    </section>
  )
}



export default UserChallenge