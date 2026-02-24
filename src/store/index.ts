import { configureStore } from "@reduxjs/toolkit";
import { exhibitionAPI } from "../services/exhibitionAPI";
import { projectAPI } from "../services/projectAPI";

const store = configureStore({
  reducer: {
    [exhibitionAPI.reducerPath]: exhibitionAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exhibitionAPI.middleware).concat(projectAPI.middleware),
});

export default store
