import axios from "axios";
import { useEffect, useState } from "react"

function FetchUser () {

  const[user, setUser] = useState(null);
  const[isLoading, setIsLoading] = useState(true);
  const[isError, setIsError] = useState(false)


  useEffect(()=>{

    const fetchUser = async () =>{
      try {
        const response = await axios.get("https://api.github.com/users/QuincyLarson");
        const user = response.data;
        
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true)
      }
      setIsLoading(false)
      
    } 
    
    fetchUser();
    
    

  },[])
  
  if (isLoading){
    return <h2>Loading...</h2>
  }

  if (isError){
    return <h2>Error Fetching data...</h2>
  }
  const {login,company, bio} = user
  return (
    
    <section>
      <div>Fetch User</div>
      <div>
        <h2>{login}</h2>
        <h4>{company}</h4>
        <h4>{bio}</h4>
      </div>
    </section>
  )
}

export default FetchUser