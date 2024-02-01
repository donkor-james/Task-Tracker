import Task from "./Task";
import AddTask from "./AddTask";
import React from "react";

function Tasks({ tasks, onDelectTask, onToggle, onAdd }) {
  return (
    <>
      <form className="form1" action="">
        <header>
          <h2> Task Tracker</h2>
          <button className="btn">Add</button>
        </header>

        <AddTask onAdd={onAdd} />

        <div className="reminder">
          {" "}
          {tasks.length !== 0 ? "Set Reminder: " : null}
        </div>

        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelect={onDelectTask}
            onToggle={onToggle}
          />
        ))}

        <div
          style={{ fontSize: "18px", textAlign: "center", marginTop: "60px" }}
        >
          {tasks.length === 0 ? "No task to show " : null}
        </div>
      </form>
    </>
  );
}

export default Tasks;
