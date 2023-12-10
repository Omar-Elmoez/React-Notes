import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ProjectContextProvider from "./store/project-context.jsx";
import TaskContextProvider from "./store/task-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
