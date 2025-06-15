import {configureStore} from "@reduxjs/toolkit";
import ResumeReducer from "../store/Slices/ResumeSlice";

export const store = configureStore({
  reducer: {
    resume: ResumeReducer,
  },
});
