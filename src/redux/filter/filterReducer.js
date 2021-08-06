import { createReducer } from "@reduxjs/toolkit";
import { updateFilterValue } from "./filterActions";

const contactsFilterReducer = createReducer("", {
  [updateFilterValue]: (_, { payload }) => payload,
});

export default contactsFilterReducer;

// ========================== Redux ============================
// import { UPDATE_FILTER_VALUE } from "../constants/constants";

// export const contactsFilterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case UPDATE_FILTER_VALUE:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default contactsFilterReducer;
