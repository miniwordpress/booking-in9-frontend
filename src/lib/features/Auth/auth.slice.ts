import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authAPI } from "./auth.query"
import { setAccessToken } from '@/utils/cookies'

const reducerName = "auth"
export const initialState: {} = {}

export const authSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<any>) => {
      setAccessToken(payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authAPI.endpoints.signIn.matchFulfilled,
        (state, { payload }: PayloadAction<any>) => {
          setAccessToken(payload.token)
        }
      )
  },
})

export const authSliceReducer = { [reducerName]: authSlice.reducer }

export const {
  setAuthState,
} = authSlice.actions
