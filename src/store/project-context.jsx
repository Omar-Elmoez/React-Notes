import { createContext } from "react";

export const ProjectContext = createContext({
  projects: [],
  tasks: [],
  selectedProjectId: undefined,
  startaddingProject: () => {},
});

export default function ProjectContextProvider({ children }) {

  const [projectsState, setProjectsState] = useState({
    projects: [],
    tasks: [],
    // undefined means => you don't select any project and you are not going to add a new one.
    selectedProjectId: undefined,
  });

  const startaddingProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        // null means => you are going to add a new one.
        selectedProjectId: null,
      };
    });
  };

  const CtxValues = {
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    selectedProjectId: projectsState.selectedProjectId,
    startaddingProject: startaddingProjectHandler,
  };

  return (
    <ProjectContext.Provider value={CtxValues}>
      {children}
    </ProjectContext.Provider>
  );
}