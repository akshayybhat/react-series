import { useState } from "react"
import {data} from "../../data"



function PeopleList(){
  const [peopleList, setPeopleList] = useState(data);

  const onClearAllPeople = () =>{
    setPeopleList([])
  }

  return (
    <div>
      <h2 className="font-extrabold text-6xl">People List</h2>

      {peopleList.map((people)=> <Person name={people.name} id={people.id} key={people.id} peopleList={peopleList} setPeopleList={setPeopleList}/>)}

      <div>
        <button className="bg-purple-700 mt-4 p-2 text-2xl text-white" onClick={onClearAllPeople}>Clear All</button>
      </div>
    </div>
  )
}

function Person({name,id,peopleList,setPeopleList}){
  
  const onRemovePerson = (id) =>{
    // const list = [];
    // for (let i=0; i<peopleList.length; i++){
    //   if (peopleList[i].id !== id){
    //     list.push(peopleList[i]);
    //   }
    // }
    // setPeopleList(list)
    

    // using filter array method
    const list = peopleList.filter((people)=>{
      return people.id !== id
    })
    setPeopleList(list)

  }


  return (
    <section>
      <h2 className="font-semibold text-4xl m-2 p-2">{name}</h2>
      <button className="bg-red-200 p-2 text-2xl text-white" onClick={()=>onRemovePerson(id)}>Remove</button>
    </section>
  )
}

export default PeopleList