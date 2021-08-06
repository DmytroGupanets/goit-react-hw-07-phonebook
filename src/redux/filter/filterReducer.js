import { createReducer } from "@reduxjs/toolkit";
import { updateFilterValue } from "./filterActions";

const contactsFilterReducer = createReducer("", {
  [updateFilterValue]: (_, { payload }) => payload,
});

export default contactsFilterReducer;
