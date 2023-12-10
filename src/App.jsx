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

  // const [projectState, setProjectState] = useState({
  //   projects: [],
  //   tasks: [],
  //   // undefined means => you don't select any project and you are not going to add a new one.
  //   selectedProjectId: undefined,
  // });

  // const startaddingProjectHandler = () => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       // null means => you are going to add a new one.
  //       selectedProjectId: null,
  //     };
  //   });
  // };

  // const addingNewProjectHandler = (projectData) => {
  //   setProjectState((prevState) => {
  //     const newProject = {
  //       id: Math.random(),
  //       ...projectData,
  //     };
  //     return {
  //       ...prevState,
  //       // projects: [...prevState.projects, createdProject]
  //       selectedProjectId: undefined,
  //       projects: [...prevState.projects, newProject],
  //     };
  //   });
  // };

  // const cancelHandler = () => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //     };
  //   });
  // };

  // const selectProjectHandler = (id) => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: id,
  //     };
  //   });
  // };

  // const removeProjectHandler = (id) => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       projects: prevState.projects.filter((p) => p.id !== id),
  //       selectedProjectId: undefined,
  //     };
  //   });
  // };

  // const removeProjectHandler = () => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: prevState.projects.filter(
  //         (p) => p.id !== prevState.selectedProjectId
  //       ),
  //     };
  //   });
  // };

  // const addTaskHandler = (taskText) => {
  //   setProjectState((prevState) => {
  //     const newTask = {
  //       text: taskText,
  //       id: Math.random(),
  //       relatedProjectId: prevState.selectedProjectId,
  //     };
  //     return {
  //       ...prevState,
  //       tasks: [...prevState.tasks, newTask],
  //     };
  //   });
  // };
  // const removeTaskHandler = (id) => {
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
  //       tasks: prevState.tasks.filter((t) => t.id !== id),
  //     };
  //   });
  // };

  // let chosenProject = projectState.projects.find(
  //   (project) => project.id === projectState.selectedProjectId
  // );

  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="pt-8 h-screen flex gap-8">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
