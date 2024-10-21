import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signIn } from "./auth.query"
import { setAccessToken } from '@/utils/cookies'
import { IReduxAuth } from "./auth"

const reducerName = "auth"
export const initialState: IReduxAuth.IInitialState = {
  baseResponse: {
    code: "",
    data: null,
    message: null,
    cause: null,
  }
}

export const authSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      signIn.matchFulfilled,
      (state, { payload }: {payload: IReduxAuth.BaseResponse}) => {
        state.baseResponse = {...payload}
      }
    )
  },
})

export const authSliceReducer = { [reducerName]: authSlice.reducer }