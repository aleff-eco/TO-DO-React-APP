import React from "react";
import "../stylesheets/Activity.css";
import {BiTrashAlt} from "react-icons/bi";

function Activity({id, text, completed, completeActivity, deleteActivity}){
  



  return (
    <div className={completed ? 'activity-container completed' : 'activity-container' }>
      <div className="activity-text" onClick={() => completeActivity(id)}> 
        {text}
      </div>
      <div className={completed ? 'activity-icon completed' : 'activity-icon' } onClick={() => deleteActivity(id)}>
        <BiTrashAlt className="activity-icon" />
      </div>
    </div>

  );

}


export default Activity;