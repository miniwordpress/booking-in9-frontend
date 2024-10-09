import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { testMail } from "./mock.query"
import { IReduxTestmail } from "./mock"

const reducerName = "mock"
export const initialState: IReduxTestmail.IInitialState = {
  testMail: {
    message: "Init State"
  }
}

export const mockSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      testMail.matchFulfilled,
      (state, { payload }: PayloadAction<{ message: string }>) => {
        state.testMail.message = payload.message
      }
    )
  },
})

export const mockSliceReducer = { [reducerName]: mockSlice.reducer }