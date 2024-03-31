import React from 'react';
import './GoalList.css';

export const GoalList = (props) => {
  return (
        <ul className="goal-list">
            {
                props.goals.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>
                })
            }
        </ul>
  )
}
