import { useContext, useEffect } from "react";
import {
  NewProject,
  SideBar,
  NoProjectSelected,
  SelectedProject,
} from "./components";

import { ProjectContext } from "./contextAPI-store/project-context";
import { useDispatch, useSelector } from "react-redux";
import { saveProjectsToLocalStorage } from "./redux-store/projects-actions";


function App() {
  const dispatch = useDispatch();
  const selectedProjectId = useSelector(state => state.project.selectedProjectId)
  const projectsState = useSelector(state => state.project)
  // const { selectedProjectId } = useContext(ProjectContext);

  useEffect(() => {
    if (projectsState.changed) {
      dispatch(saveProjectsToLocalStorage(projectsState.projects));
    }
  }, [projectsState, dispatch])

  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="pb-4 md:pb-0 md:pt-8 flex flex-col md:flex-row items-start gap-8 bg-slate-100">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
