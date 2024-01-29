import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../redux-store/projects";
import taskReducer from "../redux-store/tasks";

const store = configureStore({
  reducer: {
    task: taskReducer,
    project: projectReducer
  }
})

export default store