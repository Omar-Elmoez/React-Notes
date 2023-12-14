import { useContext, useEffect } from "react";
import { Button } from "../components";
import { ProjectContext } from "../store/project-context";
import { TaskContext } from "../store/task-context";

function SideBar() {
  const { projects, startaddingProject, selectProject, selectedProjectId } =
    useContext(ProjectContext);
  const { tasks } = useContext(TaskContext);

  let projectTasksNumber = projects.map((project) => {
    return tasks.reduce((acc, task) => {
      if (task.relatedProjectId === project.id) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });

  console.log(projectTasksNumber[0]);
  return (
    <aside className="w-1/3 md:w-72 py-16 px-8 bg-red-900 text-stone-50 sticky top-0 h-[100dvh] rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">
        Your Projects
      </h2>
      <Button onClick={startaddingProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project, index) => (
          <li key={project.id}>
            <button
              className={`w-full text-left py-1 px-2 my-1 rounded-sm ${
                selectedProjectId === project.id
                  ? "text-stone-200 bg-stone-800"
                  : "text-stone-400"
              } hover:text-stone-200 hover:bg-stone-800 flex justify-between items-center`}
              onClick={() => selectProject(project.id)}
            >
              {project.title}
              <span>
                {projectTasksNumber[index]}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default SideBar;
