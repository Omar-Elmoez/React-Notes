import { useContext, useState } from "react";
import {
  NewProject,
  SideBar,
  NoProjectSelected,
  SelectedProject,
} from "./components";

import { ProjectContext } from "./store/project-context";


function App() {
  const { selectedProjectId } = useContext(ProjectContext);





  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="pt-8 flex items-start gap-8 bg-slate-100">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
