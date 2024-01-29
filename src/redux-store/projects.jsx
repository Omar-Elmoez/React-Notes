import { createSlice } from "@reduxjs/toolkit";

const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

const initialState = {
  projects: storedProjects,
  selectedProject: {},
  selectedProjectId: undefined,
}

const projectsSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    startAddingProject: (state) => {
      state.selectedProjectId = null;
    },
    addingNewProject: (state, action) => {
      const newProject = {
        id: Math.random(),
        ...action.payload
      }
      state.projects.push(newProject);
      localStorage.setItem("projects", JSON.stringify(state.projects));
      state.selectedProjectId = newProject.id;
      state.selectedProject = newProject;
    },
    selectProject: (state, action) => {
      state.selectedProjectId = action.payload;
      state.selectedProject = state.projects.find(project => project.id === state.selectedProjectId);
    },
    removeProject: (state) => {
      state.projects = state.projects.filter(project => project.id !== state.selectedProjectId);
      localStorage.setItem('projects', JSON.stringify(state.projects));
      state.selectedProjectId = undefined;
    },
    cancelAddingProject: (state) => {
      state.selectedProjectId = undefined;
    }
  }
})

export const projectsActions = projectsSlice.actions;

export default projectsSlice.reducer;