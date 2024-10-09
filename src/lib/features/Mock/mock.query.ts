import { createApi } from '@reduxjs/toolkit/query/react'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import customFetchBase from '../customFetchBase'

function isHydrateAction(action: Action): action is PayloadAction<any> {
  return action.type === HYDRATE
}
const baseBody = {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET
}

const reducerPath = "mockAPI"
export const mockAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ['Mock'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints(builder) {
    return {
      testMail: builder.mutation({
        query: (body) => ({
          url: '/mock/mail',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Mock'],
      }),
    }
  },
})

export const mockQueryReducer = { [reducerPath]: mockAPI.reducer }
export const { useTestMailMutation } = mockAPI

export const { testMail } = mockAPI.endpoints