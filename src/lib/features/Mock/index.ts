import { mockQueryReducer } from "./mock.query"
import { mockSliceReducer } from "./mock.slice"

const combineReducer = {
  ...mockQueryReducer,
  ...mockSliceReducer
}

export * from "./mock.query"
export * from "./mock.slice"
export default combineReducer