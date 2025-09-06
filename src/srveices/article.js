import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleapi = createApi({
  reducerPath: 'articleapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '8fd4cc5935msh55369f10316779ap1845e9jsneaa2d2f9d6f8')
      headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: ({ articleUrl }) =>
        `/summarize?url=${encodeURIComponent(articleUrl)}&length=2`,
    }),
  }),
})

export const { useLazyGetSummaryQuery } = articleapi
