import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsActions";

export const contactsItemReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [removeContactSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

export const error = createReducer("", {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: (_, { payload }) => "",
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: (_, { payload }) => "",
  [removeContactError]: (_, { payload }) => payload,
  [removeContactRequest]: (_, { payload }) => "",
});

export const loader = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});
