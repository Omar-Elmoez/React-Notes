import { useContext } from "react";
import { Tasks } from "../components";
import { ProjectContext } from "../contextAPI-store/project-context";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../redux-store/projects";

export default function SelectedProject() {

  const dispatch = useDispatch();

  // const {selectedProject, removeProject } = useContext(ProjectContext);
  const selectedProject = useSelector(state => state.project.selectedProject);

  const formattedDate = new Date(selectedProject?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const deleteHandler = () => {
    dispatch(projectsActions.removeProject());
  }

  return (
    <div className="w-[90%] mx-auto md:mx-0 md:w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject?.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400">{formattedDate}</p>
        <p className="mt-4 text-stone-600 whitespace-pre-wrap">
          {selectedProject?.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
