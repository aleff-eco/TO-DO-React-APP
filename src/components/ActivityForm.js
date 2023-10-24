import React, {useState} from "react";
import '../stylesheets/ActivityForm.css';
import { v4 as uuidv4 } from 'uuid';

function ActivityForm(props) {

  const [input, setInput] = useState('');

  const changeManagment = e => {
    setInput(e.target.value);
    console.log(setInput)
  };

  const deliveryManagment = e => {
    e.preventDefault();
    const newActivity ={
      id: uuidv4(),
      text: input,
      completed: false, 
    }
    props.onSubmit(newActivity);
  };

  return (
    <form className="activity-form" onSubmit={deliveryManagment}>
      <input className="activity-input" type="text" placeholder="Write an activity" name="text" onChange={changeManagment} /> 
      <button className="activity-button">Add activity</button>
    </form>
  );
}

export default ActivityForm;
