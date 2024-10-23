import { accommodationQueryReducer } from "./accommodation.query"
import { accommodationSliceReducer } from "./accommodation.slice"

const combineReducer = {
  ...accommodationQueryReducer,
  ...accommodationSliceReducer,
}

export * from "./accommodation.query"
export * from "./accommodation.slice"
export default combineReducer
