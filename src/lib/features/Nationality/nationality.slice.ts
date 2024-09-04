import { createSlice } from "@reduxjs/toolkit"
import { IReduxNationality } from "./nationality"
import { publicNationality } from "./nationality.query"

const reducerName = "nationality"
export const initialState: IReduxNationality.IInitialState = {
  nationalities: []
}

export const nationalitySlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    // selectPlan: (state, { payload }) => {
    //   state.nationality = payload
    // },
  },
  extraReducers: (buider) => {
    buider.addMatcher(
      publicNationality.matchFulfilled,
      (state, { payload }: any) => {
        state.nationalities = [...payload.nationalities]
      }
    )
  },
})

export const nationalitySliceReducer = { [reducerName]: nationalitySlice.reducer }
// export const { selectPlan } = plansSlice.actions