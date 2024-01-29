// import { useContext } from "react";
import { NewTask } from "../components";
// import { TaskContext } from "../contextAPI-store/task-context";
// import { ProjectContext } from "../contextAPI-store/project-context";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../redux-store/tasks";

const capitalize = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function Tasks() {
  const selectedProjectId = useSelector(state => state.project.selectedProjectId)
  const tasks = useSelector(state => state.task.tasks)

  // const { tasks, removeTask, markAsCompleted } = useContext(TaskContext);
  // const { selectedProjectId } = useContext(ProjectContext);

  let projectTasksNumber = tasks.reduce((acc, task) => {
    if (task.relatedProjectId === selectedProjectId) {
      return acc + 1;
    }
    return acc;
  }, 0)

  const dispatch = useDispatch();
  const markAsCompleted = (id) => {
    dispatch(tasksActions.markAsCompleted(id))
  }

  const removeTask = (id) => {
    dispatch(tasksActions.removeTask(id))
  }

  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask />
      {projectTasksNumber === 0 && (
        <p className="text-stone-700 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
      {projectTasksNumber > 0 && (
        <ul className="mt-8 p-4 rounded-sm">
          {tasks.map((task) => {
            if (task.relatedProjectId === selectedProjectId) {
              return (
                <li
                  key={task.id}
                  className={`relative group/item my-4 flex items-center justify-between shadow-md p-4 hover:-translate-y-2 duration-500`}
                >
                  {task.isCompleted && <span className="absolute inset-0 bg-green-800 group-hover/item:bg-green-800/30 text-white group-hover/item:text-transparent text-xl tracking-wider font-bold flex items-center justify-center">Completed</span>}
                  <span>
                    {capitalize(task.text)}
                  </span>
                  <div className="space-x-4 group-hover/item:z-10">
                    <button className="text-stone-700 hover:text-green-500 font-bold" onClick={() => markAsCompleted(task.id)}>
                      {task.isCompleted ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      className="text-stone-700 hover:text-red-500"
                      onClick={() => removeTask(task.id)}
                    >
                      Clear
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
