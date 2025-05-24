import React, { act, useReducer } from 'react';
import { data, people } from '../../data'; 


const defaultState = {
  people: data
}

const reducer = (state, action) =>{
  if (action.type==="CLEAR"){
    return {...state, people:[]}
  }
  if (action.type==="RESET"){
    return {...state, people: data}
  }
  if (action.type==="REMOVE_ID"){
    const newPeople = state.people.filter((person)=> person.id !== action.payload.id)
    return {...state, people:newPeople}
  }

  return state
}

const ReducerBasics = () => {


  const [state, dispatch] =  useReducer(reducer, defaultState)

  const removeItem = (id) =>{
    dispatch({type:"REMOVE_ID", payload:{id}})
  }
  const handleClear = () =>{
    dispatch({type:'CLEAR'})
  }
  const resetPeopleList = () =>{
    dispatch({type:'RESET'})
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length>0 ? <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={handleClear}
      >
        clear items
      </button>: <button onClick={resetPeopleList}>Reset</button>}
      
    </div>
  );
};

export default ReducerBasics;