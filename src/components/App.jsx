import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './GlobalStyle/Layout/Layout.styled';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import data from '../data/contacts';

export const App = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));
  const initialContacts = data.map(contact => {
    contact.id = nanoid();
    return contact;
  });

  const [contacts, setContacts] = useState(
    () => localContacts ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const currentName = contacts.find(item => item.name === name);

    if (currentName && name === currentName.name) {
      alert(`${name} is already exist!`);
      return;
    }

    setContacts(prevState => [{ name, number, id: nanoid() }, ...prevState]);
  };

  const removeContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedCaseContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCaseContacts)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Layout>
      <Section title="Add contact">
        <ContactForm onSubmit={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section
          title="Contacts"
          headerContent={<Filter value={filter} onChange={changeFilter} />}
        >
          <ContactList contacts={filteredContacts} onRemove={removeContact} />
        </Section>
      )}

      <GlobalStyle />
    </Layout>
  );
};
