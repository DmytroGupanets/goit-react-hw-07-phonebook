import React from "react";
import { connect } from "react-redux";
import ContactsListItem from "./contactsListItem/ContactsListItem";
import styles from "./ContactsList.module.css";
import {
  getFilteredContacts,
  getFilterValue,
  getLoaderCondition,
} from "../../redux/contacts/contacts-selector";

const ContactList = ({ isLoading, filteredContacts }) => {
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className={styles.contactsList}>
          {filteredContacts.map((contact) => (
            <ContactsListItem key={contact.id} {...contact} id={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredContacts: getFilteredContacts(state),
  filterValue: getFilterValue(state),
  isLoading: getLoaderCondition(state),
});

export default connect(mapStateToProps)(ContactList);
