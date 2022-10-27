import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import Notification from './Notification';
import { fetch, addNewContact, removeNewContact } from 'shared/services/API';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import { add, remove } from 'redux/contacts/contacts-slice';
import { addFilterContacts } from 'redux/filter/filter-slice';

export const App = () => {
  const dispatch = useDispatch();
  const fullStore = useSelector(store => store.contacts);
  // const filter = useSelector(store => store.filter);

  const { filter, contacts } = fullStore;
  const { items, isLoading, error } = contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(items);
  // fetch().then(contact => console.log(contact));
  // const contact = { name: 'asd', phone: 123 };
  // removeNewContact('1');
  // console.log(store);

  const addContact = data => {
    // if (store.find(el => el.name === data.name)) {
    //   Notify.failure('This contact is already in phonebook');
    //   return;
    // }

    // dispatch(add(data));

    Notify.success('Contact added succesfully!');
  };

  const addFilter = e => {
    // dispatch(addFilterContacts(e.target.value));
    // console.log(e.target.value);
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
    // dispatch(remove(id));
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook addContact={addContact} />
      </Section>
      <Section title="Contacts">
        {items.length ? (
          <>
            <Filter addFilter={addFilter} value={filter} />
            <Contacts data={filterContacts()} deleteContact={deleteContact} />
          </>
        ) : (
          <Notification message="Add new contact" />
        )}
      </Section>
    </>
  );
};
