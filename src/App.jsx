import { useContext } from "react";
import {
  NewProject,
  SideBar,
  NoProjectSelected,
  SelectedProject,
} from "./components";

import { ProjectContext } from "./contextAPI-store/project-context";


function App() {
  const { selectedProjectId } = useContext(ProjectContext);

  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="py-4 md:pb-0 md:pt-8 flex flex-col md:flex-row items-start gap-8 bg-slate-100">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
