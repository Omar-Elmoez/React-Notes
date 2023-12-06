import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {

  const [projectState, setProjectState] = useState({
    projects: [],
    // undefined means => you don't select any project and you are not going to add a new one.
    selectedProjectId: undefined,
  })

  const startaddingProjectHandler = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        // null means => you are going to add a new one.
        selectedProjectId: null,
      }
    })
  }

  const addingNewProjectHandler = (projectData) => {
    setProjectState(prevState => {
      const newProject = {
        id: Math.random(),
        ...projectData
      }
      return {
        ...prevState,
        // projects: [...prevState.projects, createdProject]
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const cancelHandler = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={startaddingProjectHandler} />
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={addingNewProjectHandler} onCancel={cancelHandler}  />
  }

  console.log(projectState.projects);
  return (
    <main className="pt-8 h-screen flex gap-8">
      <SideBar onCreateProject={startaddingProjectHandler} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
