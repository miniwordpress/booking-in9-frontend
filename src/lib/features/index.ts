import { combineReducers } from "@reduxjs/toolkit"
import packagesReducer from "./Package"
import nationalityReducer from "./Nationality"
import { authQueryReducer } from "./Auth"

export const combinedReducer = combineReducers({
  ...packagesReducer,
  ...nationalityReducer,
  ...authQueryReducer
})
