import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api`}),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `${name}`,
    }),
    checkout: builder.mutation({
      query: (orderDetails) => ({
        url: './api/checkout',
        method: 'POST',
        body: orderDetails,
      }),
    }),
  }),
});

export const { useGetproductByNameQuery, useCheckoutMutation } = productApi;
