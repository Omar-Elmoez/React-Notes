import { createSlice } from "@reduxjs/toolkit";

const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

const initialState = {
  projects: storedProjects,
  selectedProject: {},
  selectedProjectId: undefined,
  changed: false
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
      state.changed = true
      state.selectedProjectId = newProject.id;
      state.selectedProject = newProject;
    },
    selectProject: (state, action) => {
      state.selectedProjectId = action.payload;
      state.selectedProject = state.projects.find(project => project.id === state.selectedProjectId);
    },
    removeProject: (state) => {
      state.projects = state.projects.filter(project => project.id !== state.selectedProjectId);
      state.changed = true;
      state.selectedProjectId = undefined;
    },
    cancelAddingProject: (state) => {
      state.selectedProjectId = undefined;
    }
  }
})

export const projectsActions = projectsSlice.actions;

export default projectsSlice.reducer;