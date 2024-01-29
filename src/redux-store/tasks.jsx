import { createSlice } from "@reduxjs/toolkit";

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: storedTasks,
}

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        text: action.payload.taskText,
        id: Math.random(),
        relatedProjectId: action.payload.projectId,
        isCompleted: false
      }

      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    markAsCompleted: (state, action) => {
      const updatedTasks = state.tasks.map(task => {
        if (task.id === action.payload) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      state.tasks = updatedTasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
})

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer