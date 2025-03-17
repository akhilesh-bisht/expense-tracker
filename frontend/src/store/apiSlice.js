import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://expense-tracker-o8to.onrender.com/";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
    credentials: "include", // ✅ Allows sending cookies for authentication
  }),
  endpoints: (builder) => ({
    // Get categories
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // Get labels
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),

    // Add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // Delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
