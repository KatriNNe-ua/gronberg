import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { projectsData, type Project } from "../data/dataDB";
import apiClient from "../api/apiClient";

const prtApi = apiClient("project", 3000, projectsData);

export const projectAPI = createApi({
  reducerPath: "project",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      async queryFn() {
        try {
          const data = await prtApi.getAll();
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
      keepUnusedDataFor: 600,
    }),
    getProjectById: builder.query<Project, string | number>({
      async queryFn(id) {
        try {
          const data = await prtApi.getById(id);
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectByIdQuery } = projectAPI;
