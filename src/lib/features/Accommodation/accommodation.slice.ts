import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { listAccommodation } from "./accommodation.query"
import { setAccessToken } from '@/utils/cookies'
import { IReduxAccommodation } from "./accommodation"

const reducerName = "accommodation"
export const initialState: IReduxAccommodation.IInitialState = {
  baseResponse: {
    code: "",
    data: null,
    cause: null,
    message: "",
  }
}

export const accommodationSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addMatcher(
      listAccommodation.matchFulfilled,
      (state, { payload }: {payload: IReduxAccommodation.BaseResponse}) => {
        state.baseResponse = {...payload}
      }
    )
  },
})

export const accommodationSliceReducer = { [reducerName]: accommodationSlice.reducer }