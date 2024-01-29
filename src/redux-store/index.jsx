import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../redux-store/projects";

const store = configureStore({
  reducer: {
    // task: taskReducer,
    project: projectReducer
  }
})

export default store