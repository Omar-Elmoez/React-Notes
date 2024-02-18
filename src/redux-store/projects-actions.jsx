export function saveProjectsToLocalStorage(projects) {
  return () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}