export default function taskReducer(state, action) {
  if (action.type == 'ADD_TASK') {
    const newTask = {
      text: action.payload.taskText,
      id: Math.random(),
      relatedProjectId: action.payload.projectId,
    };

    
    const updatedTasks = [...state, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    return [...state, newTask];
  }

  if (action.type == 'REMOVE_TASK') {
    localStorage.setItem('tasks', JSON.stringify(state.filter((task) => task.id !== action.payload)));
    return state.filter((task) => task.id !== action.payload);
  }
}