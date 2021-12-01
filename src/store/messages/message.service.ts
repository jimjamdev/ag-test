import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMessages, IMessage, IMessageCreate } from '~types';

// Define a service using a base URL and expected endpoints
export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  tagTypes: ['Message'],
  endpoints: (build) => ({
    getMessages: build.query<IMessages, any>({
      query: () => `messages`,
      providesTags: ['Message']
    }),
    createMessage: build.mutation<IMessage, Omit<IMessageCreate, 'id'>>({
      query: (body) => ({
        url: 'messages',
        method: 'POST',
        body: { data: body },
      }),
      invalidatesTags: ['Message']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessagesQuery, useCreateMessageMutation } = messagesApi