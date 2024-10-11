import { combineReducers } from "@reduxjs/toolkit"
import packagesReducer from "./Package"
import nationalityReducer from "./Nationality"
import authReducer from "./Auth"
import userReducer from "./Users"

export const combinedReducer = combineReducers({
  ...packagesReducer,
  ...nationalityReducer,
  ...authReducer,
  ...userReducer
})
