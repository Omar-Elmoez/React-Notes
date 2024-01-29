import { useContext, useEffect } from "react";
import { Button } from "../components";
import { ProjectContext } from "../contextAPI-store/project-context";
import { TaskContext } from "../contextAPI-store/task-context";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../redux-store/projects";

function SideBar() {
  const projects = useSelector(state => state.project.projects);
  const selectedProjectId = useSelector(state => state.project.selectedProjectId);
  const dispatch = useDispatch();
  // const { projects, startaddingProject, selectProject, selectedProjectId } = useContext(ProjectContext);
  const { tasks } = useContext(TaskContext);

  let projectTasksNumber = projects.map((project) => {
    return tasks.reduce((acc, task) => {
      if (task.relatedProjectId === project.id) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });

  const addingHandler = () => {
    dispatch(projectsActions.startAddingProject());
  };

  const selectingHandler = (id) => {
    dispatch(projectsActions.selectProject(id));
  }

  return (
    <aside className="md:w-[350px] w-full py-16 px-8 bg-stone-900 text-stone-50 md:sticky top-0 md:h-[calc(100dvh_-_32px)] md:rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">
        Your Projects
      </h2>
      <Button onClick={addingHandler}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project, index) => (
          <li key={project.id}>
            <button
              className={`w-full text-left py-1 px-2 my-1 rounded-sm ${
                selectedProjectId === project.id
                  ? "text-stone-200 bg-stone-800"
                  : "text-stone-400"
              } hover:text-stone-200 hover:bg-stone-800 flex justify-between items-center`}
              onClick={() => selectingHandler(project.id)}
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
