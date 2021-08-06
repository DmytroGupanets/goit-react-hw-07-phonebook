import React from "react";
import { connect } from "react-redux";
import ContactsListItem from "./contactsListItem/ContactsListItem";
import styles from "./ContactsList.module.css";

const ContactList = ({ contacts, filterValue }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((contact) => (
          <ContactsListItem key={contact.id} {...contact} id={contact.id} />
        ))}
    </ul>
  );
};

const mapStateToProps = (state, props) => ({
  contacts: state.contacts.items,
  filterValue: state.contacts.filter,
});

export default connect(mapStateToProps)(ContactList);
