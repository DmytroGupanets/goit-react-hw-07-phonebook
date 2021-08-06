import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("addContact");
export const removeContactById = createAction("removeContactById");

// ================================== Redux =================================
// import { ADD_CONTACT, REMOVE_CONTACT_BY_ID } from "../constants/constants";

// export const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });

// export const removeContactById = (id) => ({
//   type: REMOVE_CONTACT_BY_ID,
//   payload: id,
// });
