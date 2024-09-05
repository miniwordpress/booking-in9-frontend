import { combineReducers } from "@reduxjs/toolkit"
import packagesReducer from "./Package"
import nationalityReducer from "./Nationality"

export const combinedReducer = combineReducers({
  ...packagesReducer,
  ...nationalityReducer
})
