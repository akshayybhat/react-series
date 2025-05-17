import { useEffect, useState } from "react"
import axios from "axios";

function FetchGithubUsers(){

  const [userList, setUserList] = useState([]);

  useEffect(()=>{

    const fetchGithubUsers = async () =>{
      const result = await axios.get("https://api.github.com/users");
      const users = result.data;
      setUserList(users);
    }
    fetchGithubUsers()

  }, [])




  return (
    <section>
      <div className="font-bold text-5xl">Github Users</div>
      <div>
        {userList.map((user)=>{
          return(
            <div key={user.id}>
              <div  className="inline-flex m-5 p-3">
                <img src={user.avatar_url} alt="" className="w-2/6 rounded-full"/>
                <h2 className="font-semibold mt-20 ml-7 ">{user.login}</h2>
                <a className="font-semibold mt-20 ml-7 underline text-blue-400"  href={user.html_url}>Profile</a> 
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FetchGithubUsers