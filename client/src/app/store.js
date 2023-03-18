import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import projectReducer from "../features/projects/projectSlice";
import userReducer from "../features/users/userSlice";
import epicReducer from "../features/epics/epicSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    projects: projectReducer,
    epics: epicReducer,
  },
});
