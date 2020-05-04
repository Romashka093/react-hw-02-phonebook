import React from 'react';
import { ListItem } from './listItem/ListItem';
import { Filter } from '../filter/Filter';

export const ContactList = ({
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
}) =>
  contacts.length > 0 && (
    <ul>
      <Filter value={value} onChangeFilter={onChangeFilter} />
      {contacts.map(contact => (
        <li key={contact.id}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
