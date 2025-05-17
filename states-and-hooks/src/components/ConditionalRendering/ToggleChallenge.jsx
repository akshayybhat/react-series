import { useEffect, useState } from "react"

function Toggle (){

  const[component, setComponent] = useState(false)
  const[showAlert, setShowAlert] = useState(false)

  const onToggle = () =>{
    setComponent(!component)
  }

  const onShowAlert = () =>{
    setShowAlert(!showAlert)
  }


  return (
    <section>
      <div>
        <button onClick={onToggle} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Toggle</button>
        <button onClick={onShowAlert} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show Alert</button>
      </div>
      <div>
        {component ? <Login />: <Signin />}
      </div>
      <div>
        {showAlert? <Alert />: null}
      </div>
    </section>
  )
}


function Signin(){
  return (
    <section>
      <form>
        <div>
          <label >Email:</label>
          <input type="email" />
        </div>
       
        <div>
          <label >Password:</label>
          <input type="password"/>
        </div>

        <div><button>SignUp</button></div>
        
      </form>
    </section>
  )
}
function Login(){
  return (
    <section>
      <form>
        <div>
          <label >Email:</label>
          <input type="email" />
        </div>
       
        <div>
          <label >Password:</label>
          <input type="password"/>
        </div>

        <div><button>Login</button></div>
        
      </form>
    </section>
  )
}

function Alert(){
  return (
    <div>
      <h2>This is supposed to be a alert message</h2>
    </div>
  )
}

export default Toggle