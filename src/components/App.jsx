// import { useState, useEffect } from 'react';

// import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './GlobalStyle/Layout/Layout.styled';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
// import data from '../data/contacts';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts" headerContent={<Filter />}>
          <ContactList />
        </Section>
      )}

      <GlobalStyle />
    </Layout>
  );
};
