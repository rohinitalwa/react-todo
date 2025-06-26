import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  task: "",
  error: "",
};

const TaskSlice = createSlice({
  name: "taskStore",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      const newTask = task.trim();
      if (newTask == "") {
        state.error = "Task cannot be empty!";
      } else if (state.taskList.includes(newTask)) {
        state.error = "Task already exists!";
      } else {
        state.taskList.push(newTask);
        state.task = "";
      }
    },
    setTask: (state, action) => {
      state.task = action.payload;
      state.error = "";
    },
  },
});

export const { addTask, setTask } = TaskSlice.actions;
export const taskReducer = TaskSlice.reducer;
