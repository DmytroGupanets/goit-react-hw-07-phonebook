import { combineReducers } from "redux";
import { contactsItemReducer, loader } from "./contacts/contactsReducer";
import contactsFilterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  items: contactsItemReducer,
  filter: contactsFilterReducer,
  isLoading: loader,
});

export default rootReducer;
