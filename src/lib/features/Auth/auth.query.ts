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

const signInBody = { grant_type: 'password', ...baseBody }

const reducerPath = "authAPI"
export const authAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ['Auth'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints(builder) {
    return {
      signIn: builder.mutation({
        query: (body) => ({
          url: '/mock/login',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Auth'],
      }),
    }
  },

})

export const authQueryReducer = { [reducerPath]: authAPI.reducer }
// Client side 
export const {
  useSignInMutation,
} = authAPI
