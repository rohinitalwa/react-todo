import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  task: "",
  error: "",
  editingIndex: null,
  editingTask: null,
  upadateTaskError: "",
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

    editTask: (state, action) => {
      const { index, task } = action.payload;
      state.editingIndex = index;
      state.editingTask = task;
    },
    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
      state.upadateTaskError = "";
    },
    updateTask: (state) => {
      const { editingIndex, editingTask } = state;
      const updatedTask = editingTask.trim();
      if (updatedTask == "") {
        state.upadateTaskError = "Task cannot be empty!";
        return;
      }

      const dupIndex = state.taskList.findIndex((t) => t == updatedTask);
      if (dupIndex > -1 && dupIndex !== editingIndex) {
        state.upadateTaskError = "Task already exists!";
        return;
      }
      state.taskList[editingIndex] = editingTask;
      state.editingIndex = null;
      state.editingTask = null;
    },

    deleteTask: (state, action) => {
      const tasks = state.taskList.filter((_, i) => i !== action.payload);
      state.taskList = [...tasks];
    },
  },
});

export const {
  addTask,
  setTask,
  editTask,
  setEditingTask,
  updateTask,
  deleteTask,
} = TaskSlice.actions;
export const taskReducer = TaskSlice.reducer;
