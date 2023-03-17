import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { nanoid } from 'nanoid';

import data from './data/contacts';

const contacts = data.map(contact => {
  contact.id = nanoid();
  return contact;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialContacts={contacts} />
  </React.StrictMode>
);
