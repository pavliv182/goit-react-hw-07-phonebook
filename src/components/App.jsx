import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import Notification from './Notification';

import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contacts-operations';
import { addFilterContacts } from 'redux/filter/filter-slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const { items, isLoading, error } = contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = data => {
    dispatch(addContact(data));
  };

  const filterContacts = () => {
    if (filter) {
      const filteredContacts = items.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }

    return items;
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const addFilter = e => {
    dispatch(addFilterContacts(e.target.value));
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook addContact={addNewContact} />
      </Section>
      <Section title="Contacts">
        {error && <p>{error}</p>}
        {isLoading && <p>...Loading</p>}
        {Boolean(items.length) && (
          <>
            <Filter value={filter} addFilter={addFilter} />
            <Contacts data={filterContacts()} deleteContact={deleteContact} />
          </>
        )}
        {!items.length && !isLoading && !error && (
          <Notification message="Add new contact" />
        )}
      </Section>
    </>
  );
};
