import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };
  componentDidUpdate() {
    const objJSON = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', objJSON);
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: [...data],
    });
  }
  onSubmit = contact => {
    const result = this.state.contacts.find(item => item.name === contact.name);
    if (result) {
      alert(`${contact.name} is already in contacts.`);

      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id: nanoid(4) }],
      }));
    }
  };
  onInputChange(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  onDeleteButton(contactId) {
    this.setState(prevstat => ({
      contacts: prevstat.contacts.filter(item => item.id !== contactId),
    }));
  }
  render() {
    return (
      <>
        <ContactForm onSubmit={this.onSubmit} />
        <Filter
          onChange={e => this.onInputChange(e)}
          filter={this.state.filter}
        />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDeleteButton.bind(this)}
        />
      </>
    );
  }
}

export default App;
