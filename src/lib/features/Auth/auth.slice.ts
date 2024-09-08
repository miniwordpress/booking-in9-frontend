import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthState } from "@/utils/interfaces/auth"
import { authAPI } from "./auth.query"
import { setAccessToken } from '@/utils/cookies'

const reducerName = "auth"
export const initialState: {} = {}

export const authSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<AuthState>) => {
      setAccessToken(payload.access_token)
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authAPI.endpoints.signIn.matchFulfilled,
        (state, { payload }: PayloadAction<AuthState>) => {
          setAccessToken(payload.access_token)
        }
      )
  },
})

export const authSliceReducer = { [reducerName]: authSlice.reducer }

export const {
  setAuthState,
} = authSlice.actions
