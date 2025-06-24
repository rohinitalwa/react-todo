import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function saveTask(e) {
    e.preventDefault();
    setTaskList((curVal) => [...curVal, task]);
    console.log(taskList);
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
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Save</button>
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
