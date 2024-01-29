// import { useRef } from "react";

import { useContext, useState } from "react";
// import { TaskContext } from "../contextAPI-store/task-context";
import { ProjectContext } from "../contextAPI-store/project-context";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../redux-store/tasks";

export default function NewTask() {

  const dispatch = useDispatch();
  // const { addTask } = useContext(TaskContext);

  // const { selectedProjectId } = useContext(ProjectContext)
  const projectId = useSelector(state => state.project.selectedProjectId);

  // const task = useRef();
  const [taskText, setTask] = useState("");

  const inputChangeHandler = (e) => {
    setTask(e.target.value)
  }

  const clickButtonHandler = () => {
    if (taskText.trim() === "") {
      return;
    }
    dispatch(tasksActions.addTask({projectId, taskText}));
    setTask("")
  }

  return (
    <div className="space-x-4">
      {/* <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" ref={taskText} /> */}
      {/* <button className="text-stone-700 hover:text-stone-950" onClick={() => onAddingTask(taskText.current.value)}>Add Task</button> */}
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={taskText} onChange={inputChangeHandler} />
      <button className="text-stone-700 hover:text-stone-950" onClick={clickButtonHandler}>Add Task</button>
    </div>
  );
}