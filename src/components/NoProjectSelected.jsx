import { useContext } from "react";
import NoProjectPhoto from "../assets/no-projects.png";
import { Button } from '../components'
import { ProjectContext } from "../contextAPI-store/project-context";
import { projectsActions } from "../redux-store/projects";
import { useDispatch } from "react-redux";
export default function NoProjectSelected() {

  // const { startaddingProject } = useContext(ProjectContext);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(projectsActions.startAddingProject());
  }

  return (
    <div className="mt-24 text-center w-full md:w-2/3">
      <img
        src={NoProjectPhoto}
        alt="An empty task list"
        className="w-20 h-20 mx-auto object-contain"
      />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={clickHandler}>Create new project</Button>
      </p>
    </div>
  );
}
