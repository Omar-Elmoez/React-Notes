import { createContext, useReducer } from "react";
import projectReducer from "../reducers/project-reducer";

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

  const [projectsState, projectDispatch] = useReducer(projectReducer, {
    projects: [],
    // undefined means => you don't select any project and you are not going to add a new one.
    selectedProjectId: undefined,
  });

  const startaddingProjectHandler = () => {
    projectDispatch({
      type: "START_ADDING_PROJECT",
    })
  };

  const cancelHandler = () => {
    projectDispatch({
      type: 'CANCEL_ADDING_PROJECT'
    })
  };

  const selectProjectHandler = (id) => {
    projectDispatch({
      type: "SELECT_PROJECT",
      payload: id
    })
  };

  let chosenProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const removeProjectHandler = () => {
    projectDispatch({
      type: "REMOVE_PROJECT",
    })
  };

  const addingNewProjectHandler = (projectData) => {
    projectDispatch({
      type: 'ADD_NEW_PROJECT',
      payload: projectData
    })
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
