import React, { useState } from "react";
import "../stylesheets/ActivityList.css";
import ActivityForm from "./ActivityForm";
import Activity from "./Activity";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    console.log("Activity added successfully");
    if (activity.text.trim()) {
      const updatedActivities = [activity, ...activities];
      setActivities(updatedActivities);
    }
  };

  const deleteActivity = (id) => {
    const updatedActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(updatedActivities);
  };

  const completeActivity = (id) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        activity.completed = !activity.completed;
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  return (
    <>
      <ActivityForm onSubmit={addActivity} />
      <div className="Activity-list-container">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            id={activity.id}
            text={activity.text}
            completed={activity.completed}
            deleteActivity={deleteActivity}
            completeActivity={completeActivity}
          />
        ))}
      </div>
    </>
  );
}

export default ActivityList;
