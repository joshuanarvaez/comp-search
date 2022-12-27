import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatGptApi = createApi({
  reducerPath: 'chatGptApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
});
