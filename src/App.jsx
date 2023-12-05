import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [newProject, setNewProject] = useState(false);
  const handleNewProject = () => {
    setNewProject(true);
  }
  return (
    <main className="pt-8 h-screen flex gap-8">
      <SideBar onCreateProject={handleNewProject} />
      {newProject ? <NewProject /> : <NoProjectSelected onCreateProject={handleNewProject} />}
    </main>
  );
}

export default App;
