import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const searchApiHeaders = {
  'X-RapidAPI-Key': '487753a686msh05c960de3e0c08cp15e507jsn67a8fbc22f4b',
  'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
};
const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: searchApiHeaders });

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: () => createRequest('api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true'),
    }),
  }),
});

export const {
  useGetSearchResultsQuery,
} = searchApi;
