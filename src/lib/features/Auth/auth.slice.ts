import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signIn } from "./auth.query"
import { setAccessToken } from '@/utils/cookies'
import { IReduxAuth } from "./auth"

const reducerName = "auth"
export const initialState: IReduxAuth.IInitialState = {
  token: 0
}

export const authSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<any>) => {
      state.token = ++state.token
      // setAccessToken(payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      signIn.matchFulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.token = payload.token
        setAccessToken(payload.token)
      }
    )
  },
})

export const authSliceReducer = { [reducerName]: authSlice.reducer }

export const {
  setAuthState,
} = authSlice.actions