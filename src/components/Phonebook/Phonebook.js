import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

const contactId = shortid.generate();
// const filterForContacts = (contacts, filter) => {
// 	return contacts.filter((contact) => console.log(contact.name.toLowerCase().includes(filter.toLowerCase())));
// };

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: shortid.generate(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactToAdd],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterForContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(this.state);

    // console.log(filterForContacts(contacts, filter));

    const filteredContacts = this.filterForContacts(contacts, filter);
    console.log(filteredContacts);

    return (
      <Fragment>
        <ContactForm id={contactId} onAddContact={this.addContact} />
        <ContactList
          contacts={filteredContacts}
          value={filter}
          onDeleteContact={this.deleteContact}
          onChangeFilter={this.changeFilter}
        />
      </Fragment>
    );
  }
}
