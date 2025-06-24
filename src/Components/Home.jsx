import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");
  const [upadteError, setUpadteError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

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

  function editTask(index) {
    setEditingIndex(index);
    setEditingTask(taskList[index]);
  }

  function updateTask() {
    const updatedTask = editingTask.trim();
    if (updatedTask == "") {
      setUpadteError("Task cannot be updated as empty!");
      return;
    }

    const dupIndex = taskList.findIndex((t) => t == editingTask);
    if (dupIndex > -1 && dupIndex !== editingIndex) {
      setUpadteError("Task already exists!");
      return;
    }
    const tasks = taskList.slice();
    tasks[editingIndex] = editingTask;
    setTaskList([...tasks]);

    setEditingIndex(null);
    setEditingTask(null);
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
          <li key={i}>
            {editingIndex !== i ? (
              <span>
                <span>{task}</span>
                <button onClick={() => editTask(i)}>Edit</button>
              </span>
            ) : (
              <span>
                <input
                  type="text"
                  value={editingTask}
                  onChange={(e) => {
                    setEditingTask(e.target.value);
                    setUpadteError(null);
                  }}
                />
                <button onClick={updateTask}>update</button>
                <div>{upadteError}</div>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
