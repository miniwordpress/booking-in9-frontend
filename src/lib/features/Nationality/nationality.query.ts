import { createApi } from "@reduxjs/toolkit/query/react"
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper"
import customFetchBase from "../customFetchBase"
type RootState = any

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE
}

const reducerPath = "nationalityAPI"
export const nationalityAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ["Nationality"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints(builder) {
    return {
      publicNationality: builder.query({
        query: ({ }) => ({
          url: '/api/nationalities/data',
        }),
        providesTags: ["Nationality"],
      }
      ),
    }
  },
})

export const nationalityQueryReducer = { [reducerPath]: nationalityAPI.reducer }

export const {
  usePublicNationalityQuery,
} = nationalityAPI

export const { publicNationality } = nationalityAPI.endpoints