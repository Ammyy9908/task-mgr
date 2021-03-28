import React from "react";
import Fab from "./Buttons/Fab";
import TaskContainer from "./TaskContainer";

function Dashboard() {
  return (
    <div className="dashboard__main">
      <TaskContainer title="All Tasks" />
      <Fab />
    </div>
  );
}

export default Dashboard;
