import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");

  function saveTask(e) {
    e.preventDefault();
    const newTask = task.trim();
    if (newTask == "") {
      setError("Task cannot be empty!");
    } else if (taskList.includes(newTask)) {
      setError("Task already exists!");
    } else {
      setTaskList((curVal) => [...curVal, newTask]);
      setTask("");
    }
  }
  return (
    <div>
      <h1>Welcome to react-todo</h1>
      <form action="" onSubmit={saveTask}>
        <input
          type="text"
          placeholder="enter task"
          name="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
        />
        <button type="submit">Save</button>
        <div>{error}</div>
      </form>

      <ul>
        {taskList.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
