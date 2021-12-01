import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMessagesResponse, IMessage } from '~types';

// Define a service using a base URL and expected endpoints
export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  tagTypes: ['Message'],
  endpoints: (build) => ({
    getMessages: build.query<IMessagesResponse, any>({
      query: () => `messages?sort=id:desc&pagination[pageSize]=10`,
      providesTags: ['Message']
    }),
    createMessage: build.mutation<IMessage, Omit<IMessage, 'id'>>({
      query: (data) => ({
        url: 'messages',
        method: 'POST',
        body: { data },
      }),
      invalidatesTags: ['Message']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessagesQuery, useCreateMessageMutation } = messagesApi