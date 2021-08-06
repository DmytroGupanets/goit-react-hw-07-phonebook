import { createAction } from "@reduxjs/toolkit";

export const updateFilterValue = createAction("updateFilterValue");

// =========================== Redux =====================
// export const updateFilterValue = (value = "") => ({
//   type: UPDATE_FILTER_VALUE,
//   payload: value,
// });
