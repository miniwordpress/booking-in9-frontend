import { packagesQueryReducer } from "./package.query"
import { packagesSliceReducer } from "./package.slice"

const combineReducer = {
  ...packagesQueryReducer,
  ...packagesSliceReducer,
}

export * from "./package.query"
export * from "./package.slice"
export default combineReducer
