import { useContext } from "react";
import { Tasks } from "../components";
import { ProjectContext } from "../store/project-context";

export default function SelectedProject() {

  const {selectedProject, removeProject } = useContext(ProjectContext);

  const formattedDate = new Date(selectedProject.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[90%] mx-auto md:w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={removeProject}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400">{formattedDate}</p>
        <p className="mt-4 text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
