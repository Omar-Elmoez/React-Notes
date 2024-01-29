import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux-store/index.jsx";


// import ProjectContextProvider from "./contextAPI-store/project-context.jsx";
// import TaskContextProvider from "./contextAPI-store/task-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  // <React.StrictMode>
  //   <ProjectContextProvider>
  //     <TaskContextProvider>
  //       <App />
  //     </TaskContextProvider>
  //   </ProjectContextProvider>
  // </React.StrictMode>
);
