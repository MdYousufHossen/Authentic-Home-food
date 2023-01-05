import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getProducts: builder.query<ProductType[], void>({
    //   query: () => "/products",
    // }),
  }),
});

export const {} = cartApi;
