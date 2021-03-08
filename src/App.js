import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uui } from 'uuid';
import './index.css';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContactformSubmit = data => {
    const { contacts } = this.state;
    const uniqueName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLocaleLowerCase(),
    );
    if (uniqueName) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        id: uui(),
        name: data.name,
        number: data.number,
      };
      this.setState(prev => ({ contacts: [contact, ...prev.contacts] }));
    }
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleFilter = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  render() {
    const { filter } = this.state;

    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactformSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.handleFilter()}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
