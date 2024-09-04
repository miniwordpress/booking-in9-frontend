import { createApi } from "@reduxjs/toolkit/query/react"
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper"
import customFetchBase from "../customFetchBase"
type RootState = any

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE
}

const reducerPath = "packagesAPI"
export const packagesAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ["Packages"],
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath]
    }
  },
  endpoints(builder) {
    return {
      searchPackages: builder.mutation({
        query: (body) => ({
          url: "/api/packages/search",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["Packages"],
      }),
      findPackage: builder.query({
        query: (id: string) => ({
          url: `/api/packages/${id}`,
        }),
        providesTags: ["Packages"],
      }
      ),
    }
  },
})

export const packagesQueryReducer = { [reducerPath]: packagesAPI.reducer }
// Client side
export const {
  useSearchPackagesMutation,
  useFindPackageQuery,
} = packagesAPI

// Server side
export const { searchPackages, findPackage } = packagesAPI.endpoints
