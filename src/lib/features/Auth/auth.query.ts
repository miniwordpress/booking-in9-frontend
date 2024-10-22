import { createApi } from '@reduxjs/toolkit/query/react'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import customFetchBase from '../customFetchBase'

function isHydrateAction(action: Action): action is PayloadAction<any> {
  return action.type === HYDRATE
}

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
          url: '/authentication/sign-in',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Auth'],
      }),
      verifyAccount: builder.mutation({
        query: (body) => ({
          url: '/users/verify',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Auth'],
      }),
    }
  },
})

export const authQueryReducer = { [reducerPath]: authAPI.reducer }
export const { useSignInMutation } = authAPI

export const { signIn, verifyAccount } = authAPI.endpoints
