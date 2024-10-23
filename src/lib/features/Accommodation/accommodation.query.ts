import { createApi } from "@reduxjs/toolkit/query/react";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import customFetchBase from "../customFetchBase";
type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

const reducerPath = "accommodationAPI";
export const accommodationAPI = createApi({
  reducerPath,
  baseQuery: customFetchBase,
  tagTypes: ["Accommodation"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints(builder) {
    return {
      listAccommodation: builder.mutation({
        query: (body) => ({
          url: '/mock/landing',
          method: 'POST',
          body: { ...body }
        }),
        invalidatesTags: ['Accommodation'],
      }),
    };
  },
});

export const accommodationQueryReducer = {
  [reducerPath]: accommodationAPI.reducer,
};

export const { useListAccommodationMutation } = accommodationAPI;

export const { listAccommodation } = accommodationAPI.endpoints;
