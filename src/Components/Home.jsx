import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  setTask,
  editTask,
  setEditingTask,
  updateTask,
  deleteTask,
} from "../Store/TaskSlice";

const Home = () => {
  const { taskList, task, error, editingIndex, editingTask, upadateTaskError } =
    useSelector((state) => state.taskStore);
  const dispatch = useDispatch();

  function saveTask(e) {
    e.preventDefault();
    dispatch(addTask(task));
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
            dispatch(setTask(e.target.value));
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
                <button
                  onClick={() =>
                    dispatch(editTask({ index: i, task: taskList[i] }))
                  }
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTask(i))}>Delete</button>
              </span>
            ) : (
              <span>
                <input
                  type="text"
                  value={editingTask}
                  onChange={(e) => {
                    dispatch(setEditingTask(e.target.value));
                  }}
                />
                <button onClick={() => dispatch(updateTask())}>update</button>
                <div>{upadateTaskError}</div>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
