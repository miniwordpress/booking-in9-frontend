import { createApi } from '@reduxjs/toolkit/query/react'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import customFetchBase from '../customFetchBase'

function isHydrateAction(action: Action): action is PayloadAction<any> {
  return action.type === HYDRATE
}

const reducerPath = "usersAPI"
export const usersAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ['Users'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints(builder) {
    return {
      createUser: builder.mutation({
        query: (body) => ({
          url: '/users/createUser',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Users'],
      }),
    }
  },
})

export const usersQueryReducer = { [reducerPath]: usersAPI.reducer }
export const { useCreateUserMutation } = usersAPI

export const { createUser } = usersAPI.endpoints
