import { useState } from "react";
import { people } from "../../data";

function List(){
  console.log(people)
  return (
    <div>
      <h2>People</h2>
      <Person /> 
    </div>
  )
}

function Person() {
      let image;
      return (<div>
        {people.map((person, index) => {
            {image = person?.images?.[0]?.small?.url}
            return (
              <div key={person.id}><li >{person.name} - {person.nickName} - </li>
              <img src={image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt=""  />
              </div>
            );
        })}
      </div>);
    }
  export default List