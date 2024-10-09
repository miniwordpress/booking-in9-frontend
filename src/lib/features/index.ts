import { combineReducers } from "@reduxjs/toolkit"
import packagesReducer from "./Package"
import nationalityReducer from "./Nationality"
import authReducer from "./Auth"
import mockReducer from "./Mock"

export const combinedReducer = combineReducers({
  ...packagesReducer,
  ...nationalityReducer,
  ...authReducer,
  ...mockReducer
})
