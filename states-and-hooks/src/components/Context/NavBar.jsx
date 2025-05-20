import { createContext, useContext, useState } from "react";


export const NavbarContext = createContext()
console.log(NavbarContext);

function NavBar(){

  const [user, setUser] = useState({name:'Richard'})
  const [logout, setLogout] = useState(false);

  const handleLogout = () =>{
    setLogout(!logout);
    setUser({name:null})
  }

  return(
    <NavbarContext.Provider value={{user,handleLogout}}>
      <div>
      <NavLink />
    </div>
    </NavbarContext.Provider>
    
  )
}

function NavLink(){
  
  return(
    <section className="flex justify-between items-center">
      <div className="flex space-x-4">
        <h3>Context API</h3>
        <h4>Home</h4>
        <h4>About</h4>
      </div>
      <div>
        <UserContainer />
      </div>
    </section>
  )
}

function UserContainer(){
  
  const {user, handleLogout}=useContext(NavbarContext)
  

  return(
    <div>
      {user.name? <div className="flex space-x-5">
        <h4>Hello there {user.name}</h4>
        <button className="bg-purple-300" onClick={handleLogout}>Logout</button>
      </div>: <div>Please Login</div>}
      
      
    </div>
   
  )
}
export default NavBar