import { legacy_createStore as createStore, combineReducers } from "redux"; //! legacy_createStore u  createStore olarak kullandik , createStore kaldirilmistir.
import { counterReducer } from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  //? bu metotla reducerlar birlestirilir.
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
