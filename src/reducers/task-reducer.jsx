export default function taskReducer(state, action) {
  if (action.type == 'ADD_TASK') {
    const newTask = {
      text: action.payload.taskText,
      id: Math.random(),
      relatedProjectId: action.payload.projectId,
      isCompleted: false
    };

    
    const updatedTasks = [...state, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    return updatedTasks;
  }

  if (action.type == 'REMOVE_TASK') {
    localStorage.setItem('tasks', JSON.stringify(state.filter((task) => task.id !== action.payload)));
    return state.filter((task) => task.id !== action.payload);
  }

  if (action.type === 'COMPLETE_TASK') {
    const updatedTasks = state.map((task) => {
      if (task.id === action.payload) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    return updatedTasks
  }
}