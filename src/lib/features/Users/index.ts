import { usersQueryReducer } from "./users.query"
import { usersSliceReducer } from "./users.slice"

const combineReducer = {
  ...usersQueryReducer,
  ...usersSliceReducer,
}

export * from "./users.query"
export * from "./users.slice"
export default combineReducer
