import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://munchies-api.up.railway.app`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      headers.set("x-access-user", `yousufhossendev@gmail.com`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
