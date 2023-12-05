import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {

  const [projectsState, setProjectsState] = useState({
    projects: [],
    // undefined means => you don't select any project and you are not going to add a new one.
    selectedProjectId: undefined,
  })

  const startaddingProjectHandler = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        // null means => you are going to add a new one.
        selectedProjectId: null,
      }
    })
  }

  const addingNewProjectHandler = (createdProject) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, createdProject]
      }
    })
  }

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={startaddingProjectHandler} />
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject projects={projectsState.projects} onCreateProject={addingNewProjectHandler}  />
  }

  console.log(projectsState)

  return (
    <main className="pt-8 h-screen flex gap-8">
      <SideBar onCreateProject={startaddingProjectHandler} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
