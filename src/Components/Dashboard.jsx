import React from "react";
import { useStateValue } from "../StateProvider";
import Fab from "./Buttons/Fab";
import TaskContainer from "./TaskContainer";

function Dashboard() {
  const [{ taskCreation }, dispatch] = useStateValue();

  const handleTaskCreation = () => {
    if (!taskCreation) {
      dispatch({
        type: "SET_TASK_CREATE",
        taskCreation: true,
      });
    }
  };
  return (
    <div className="dashboard__main">
      <TaskContainer title="All Tasks" />
      <Fab onClick={handleTaskCreation} />
    </div>
  );
}

export default Dashboard;
