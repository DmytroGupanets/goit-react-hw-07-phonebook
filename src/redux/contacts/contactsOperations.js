import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsActions";

axios.defaults.baseURL = "http://localhost:3010";

export const fetchContactsOperation = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const response = await axios.get("/contacts").then((res) => res.data);

    if (response.length) dispatch(fetchContactsSuccess(response));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const response = await axios
      .post("/contacts", contact)
      .then((res) => res.data);
    dispatch(addContactSuccess(response));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const removeContactOperation = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};
