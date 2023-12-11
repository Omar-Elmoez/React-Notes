export default function projectReducer(state, action) {
  if (action.type === 'START_ADDING_PROJECT') {
    return {
      ...state,
      // null means => you are going to add a new one.
      selectedProjectId: null,
    };
  }

  if (action.type === 'ADD_NEW_PROJECT') {
    const newProject = {
      id: Math.random(),
      ...action.payload,
    };

    return {
      ...state,
      selectedProjectId: undefined,
      projects: [...state.projects, newProject],
    };
  }

  if (action.type === 'REMOVE_PROJECT') {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter(
        (p) => p.id !== state.selectedProjectId
      ),
    };
  }

  if (action.type === 'SELECT_PROJECT') {
    return {
      ...state,
      selectedProjectId: action.payload,
    };
  }

  if (action.type === 'CANCEL_ADDING_PROJECT') {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  }

}