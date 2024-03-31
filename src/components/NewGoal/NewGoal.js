import React, { useState } from 'react';
import './NewGoal.css'

export const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState('')
 
  const addGoalHandler = event => {
    event.preventDefault();             // prevents from sending any request to backend

    const newGoal = {
        id: Math.random().toString(),
        text: enteredText
    };

    setEnteredText('');
    props.onAddGoal(newGoal);
  }
  
  const textChangedHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangedHandler}/>
        <button type="submit">Add Goals</button>
    </form>
  )
}
