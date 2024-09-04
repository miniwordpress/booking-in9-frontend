import { nationalityQueryReducer } from "./nationality.query"
import { nationalitySliceReducer } from "./nationality.slice"

const combineReducer = {
  ...nationalityQueryReducer,
  ...nationalitySliceReducer,
}

export * from "./nationality.query"
export * from "./nationality.slice"
export default combineReducer
