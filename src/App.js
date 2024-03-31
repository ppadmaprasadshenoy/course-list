import React, { useState } from 'react';
import {GoalList} from './components/GoalList/GoalList';
import { NewGoal } from './components/NewGoal/NewGoal';

import './App.css';

const App = () => {
  const [courseGoals, setcourseGoals ] = useState([
    {id: 'cg1', text:'Finish the course'},
    {id: 'cg2', text:'Understand the concepts'},
    {id: 'cg3', text:'Help other students'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setcourseGoals(courseGoals.concat(newGoal));         // push - modifies the existing item. so dont use. concat will create a new array by adding an item
    setcourseGoals((prevCourseGoals) =>  prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals" >
      <h2>Course Goals</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
  </div>
  )
   
};

export default App;
