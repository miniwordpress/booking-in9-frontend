import { combineReducers } from "@reduxjs/toolkit"
import packagesReducer from "./Package"
import nationalityReducer from "./Nationality"
import authReducer from "./Auth"

export const combinedReducer = combineReducers({
  ...packagesReducer,
  ...nationalityReducer,
  ...authReducer
})
