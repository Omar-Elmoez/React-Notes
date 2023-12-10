import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  selectedProject: {},
  selectedProjectId: undefined,
  startaddingProject: () => {},
  addingNewProject: () => {},
  cancelProject: () => {},
  selectProject: () => {},
  removeProject: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    projects: [],
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

  const cancelHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const selectProjectHandler = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  let chosenProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const removeProjectHandler = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (p) => p.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const addingNewProjectHandler = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };
      return {
        ...prevState,
        // projects: [...prevState.projects, createdProject]
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const CtxValues = {
    projects: projectsState.projects,
    selectedProject: chosenProject,
    selectedProjectId: projectsState.selectedProjectId,
    startaddingProject: startaddingProjectHandler,
    addingNewProject: addingNewProjectHandler,
    cancelProject: cancelHandler,
    selectProject: selectProjectHandler,
    removeProject: removeProjectHandler,
  };

  return (
    <ProjectContext.Provider value={CtxValues}>
      {children}
    </ProjectContext.Provider>
  );
}
