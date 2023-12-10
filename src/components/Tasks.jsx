import { useContext } from "react";
import { NewTask } from "../components";
import { TaskContext } from "../store/task-context";
import { ProjectContext } from "../store/project-context";

export default function Tasks() {
  const { tasks, removeTask } = useContext(TaskContext);
  const { selectedProjectId } = useContext(ProjectContext);

  let projectTasksNumber = tasks.reduce((acc, task) => {
    if (task.relatedProjectId === selectedProjectId) {
      return acc + 1;
    }
    return acc;
  }, 0)

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
        <ul className="mt-8 p-4 bg-stone-100 rounded-sm">
          {tasks.map((task) => {
            if (task.relatedProjectId === selectedProjectId) {
              return (
                <li
                  key={task.id}
                  className="my-4 flex items-center justify-between"
                >
                  <span>
                    {task.text}
                  </span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => removeTask(task.id)}
                  >
                    Clear
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
