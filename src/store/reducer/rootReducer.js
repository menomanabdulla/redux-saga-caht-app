import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"

const RootReducer = combineReducers({
  messages,
  users
});

export default RootReducer