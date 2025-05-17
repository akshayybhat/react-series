import { useState } from "react"
import { data } from "../../data"

function UserChallengeForms (){

  const [name, setName] = useState("")
  const [users, setUsers] = useState(data);


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (!name){
      return
    }
    setUsers([...users, { "id": users.length>0 ? users[(users.length)-1].id +1: 1,"name": name}]);
    setName("")
  }

  const onRemove = (id) =>{
    const newUsersList = users.filter((user)=>{
      return user.id !== id
    })
    setUsers(newUsersList)
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Name</label>
          <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
      <div className="max-w-sm mx-auto mt-5">
        {users.map((user)=>{
          return <UserList user={user} key={user.id} onRemove = {onRemove}/>
        })}

      </div>
    </div>
  )
}


function UserList({user, onRemove}){




  return(
    <section >
      
          <div>
            <li>{user.name}</li>
            <button className="mt-2 text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>onRemove(user.id)}>remove</button>
          </div>
          
     
    </section>
  )
}

export default UserChallengeForms