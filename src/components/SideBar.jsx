import { useContext } from "react";
import { Button } from "../components";
import { ProjectContext } from "../store/project-context";

function SideBar() {

  const { projects, startaddingProject, selectProject, selectedProjectId } = useContext(ProjectContext)
  

  return (
    <aside className="w-1/3 md:w-72 py-16 px-8 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">
        Your Projects
      </h2>
      <Button onClick={startaddingProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li
            key={project.id}
          >
            <button className={`w-full text-left py-1 px-2 my-1 rounded-sm ${selectedProjectId === project.id ? 'text-stone-200 bg-stone-800' : 'text-stone-400' } hover:text-stone-200 hover:bg-stone-800`} onClick={() => selectProject(project.id)}>{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default SideBar;
