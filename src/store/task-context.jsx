import { createContext, useState } from "react";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (projectId, taskText) => {
    setTasks((prevState) => {
      const newTask = {
        text: taskText,
        id: Math.random(),
        relatedProjectId: projectId,
      };

      return [...prevState, newTask];
    });
  };

  const removeTaskHandler = (id) => {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
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
