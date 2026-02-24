import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { exhibitionsData, type Exhibition } from "../data/dataDB";
import apiClient from "../api/apiClient";

const exsApi = apiClient("exhibition", 3000, exhibitionsData);

export const exhibitionAPI = createApi({
  reducerPath: "exhibition",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getExhibitions: builder.query<Exhibition[], void>({
      async queryFn() {
        try {
          const data = await exsApi.getAll();
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
      keepUnusedDataFor: 600,
    }),
    getExhibitionById: builder.query<Exhibition, string | number>({
      async queryFn(id) {
        try {
          const data = await exsApi.getById(id);
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
  }),
});

export const { useGetExhibitionsQuery, useGetExhibitionByIdQuery } = exhibitionAPI;
