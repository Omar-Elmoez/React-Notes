export function saveTasksToLocalStorage(tasks) {
  return () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}