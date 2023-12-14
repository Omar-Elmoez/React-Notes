export default function taskReducer(state, action) {
  if (action.type == 'ADD_TASK') {
    const newTask = {
      text: action.payload.taskText,
      id: Math.random(),
      relatedProjectId: action.payload.projectId,
    };

    return [...state, newTask];
  }

  if (action.type == 'REMOVE_TASK') {
    return state.filter((task) => task.id !== action.payload);
  }
}