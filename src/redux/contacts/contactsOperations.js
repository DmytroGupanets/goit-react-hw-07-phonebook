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

axios.defaults.baseURL =
  "https://react-hw-07-8ddbf-default-rtdb.europe-west1.firebasedatabase.app";

export const fetchContactsOperation = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    let response = await axios.get("/contacts.json");

    response = response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];

    if (response.length) dispatch(fetchContactsSuccess(response));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const response = await axios
      .post("/contacts.json", contact)
      .then((res) => res.data.name);

    const newContact = { ...contact, id: response };

    dispatch(addContactSuccess(newContact));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const removeContactOperation = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}.json`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};
