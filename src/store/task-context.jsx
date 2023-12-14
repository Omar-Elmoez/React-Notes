import { createContext, useReducer, useState } from "react";
import taskReducer from "../reducers/task-reducer";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default function TaskContextProvider({ children }) {

  const [tasks, taskDispatch] = useReducer(taskReducer, storedTasks);

  const addTaskHandler = (projectId, taskText) => {
    taskDispatch({
      type: "ADD_TASK",
      payload: {
        projectId,
        taskText,
      }
    })
  };

  const removeTaskHandler = (id) => {
    taskDispatch({
      type: "REMOVE_TASK",
      payload: id
    })
  };

  const CtxValues = {
    tasks: tasks,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
  };

  return (
    <TaskContext.Provider value={CtxValues}>{children}</TaskContext.Provider>
  );
}
