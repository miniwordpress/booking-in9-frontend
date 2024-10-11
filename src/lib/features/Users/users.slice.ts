import { createSlice } from "@reduxjs/toolkit"
import { IReduxUsers } from "./users"
import { createUser } from "./users.query"

const reducerName = "users"
export const initialState: IReduxUsers.IInitialState = {
  createUser: {
    code: "",
    data: null,
    message: null,
    cause: null,
  }
}

export const usersSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addMatcher(
      createUser.matchFulfilled,
      (state, { payload }: {payload: IReduxUsers.CreateUser}) => {
        state.createUser = {...payload}
      }
    )
  },
})

export const usersSliceReducer = { [reducerName]: usersSlice.reducer }